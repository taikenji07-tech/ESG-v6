import React, { useState, useEffect, useMemo, useRef } from 'react';
import type { WordSearchQuizNode, Language, WordSearchPoolItem, WordDefinition } from './types';
import { translations } from './translations';
import { XIcon } from './Icons';

// --- Types ---
interface WordSearchQuizProps {
    node: WordSearchQuizNode;
    wordPool: WordSearchPoolItem[];
    onComplete: (foundWords: string[]) => void;
    onSkip: () => void;
    language: Language;
}

type Grid = string[][];
type Coords = { row: number; col: number };

// --- Utility Functions ---
const generateGrid = (words: string[], size: number): { grid: Grid; placedWords: Map<string, Coords[]> } => {
    while (true) {
        let grid: (string | null)[][] = Array(size).fill(null).map(() => Array(size).fill(null));
        const placedWords = new Map<string, Coords[]>();
        let allWordsPlaced = true;

        const directions = [
            { r: 0, c: 1 }, { r: 1, c: 0 }, { r: 1, c: 1 }, { r: 0, c: -1 }, 
            { r: -1, c: 0 }, { r: -1, c: -1}, { r: 1, c: -1}, { r: -1, c: 1},
        ];

        for (const word of words) {
            let placed = false;
            for (let attempts = 0; attempts < 200 && !placed; attempts++) {
                const dir = directions[Math.floor(Math.random() * directions.length)];
                const startRow = Math.floor(Math.random() * size);
                const startCol = Math.floor(Math.random() * size);

                let canPlace = true;
                const wordCoords: Coords[] = [];
                
                for (let i = 0; i < word.length; i++) {
                    const row = startRow + i * dir.r;
                    const col = startCol + i * dir.c;

                    if (row < 0 || row >= size || col < 0 || col >= size || (grid[row][col] && grid[row][col] !== word[i])) {
                        canPlace = false;
                        break;
                    }
                    wordCoords.push({ row, col });
                }

                if (canPlace) {
                    wordCoords.forEach((coord, i) => {
                        grid[coord.row][coord.col] = word[i];
                    });
                    placedWords.set(word, wordCoords);
                    placed = true;
                }
            }
            if (!placed) {
                allWordsPlaced = false;
                break;
            }
        }
        
        if (allWordsPlaced) {
            const finalGrid = grid.map(row => row.map(cell => cell || 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[Math.floor(Math.random() * 26)]));
            return { grid: finalGrid, placedWords };
        }
    }
};

const DefinitionPopup: React.FC<{ definition: WordDefinition | null, onClose: () => void, t: (key: string) => string }> = ({ definition, onClose, t }) => {
    if (!definition) return null;
    return (
        <div className="word-definition-popup">
            <h3 className="word-definition-popup-word">{definition.word}</h3>
            <p className="word-definition-popup-def">{definition.definition}</p>
            <p className="word-definition-popup-ex">{definition.example}</p>
            <button onClick={onClose} className="word-definition-popup-close" aria-label="Close definition">
                <XIcon className="w-5 h-5" />
            </button>
        </div>
    );
};

// --- Component ---
export const WordSearchQuiz: React.FC<WordSearchQuizProps> = ({ node, wordPool, onComplete, onSkip, language }) => {
    const t = (key: string) => translations[language][key] || key;
    
    const wordsToFindData = useMemo(() => {
        // Shuffle the pool and pick 7 words
        return [...wordPool].sort(() => 0.5 - Math.random()).slice(0, 7);
    }, [wordPool]);

    const wordsToFind = useMemo(() => wordsToFindData.map(w => t(w.wordKey)).sort((a, b) => b.length - a.length), [wordsToFindData, language]);

    const [gridData, setGridData] = useState<{ grid: Grid; placedWords: Map<string, Coords[]> } | null>(null);
    const [foundWords, setFoundWords] = useState<Set<string>>(new Set());
    const [selection, setSelection] = useState<Coords[]>([]);
    const [isSelecting, setIsSelecting] = useState(false);
    const [activeDefinition, setActiveDefinition] = useState<WordDefinition | null>(null);
    
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setGridData(generateGrid(wordsToFind, node.gridSize));
        setFoundWords(new Set());
        setSelection([]);
    }, [wordsToFind, node.gridSize]);

    const showDefinition = (word: string) => {
        const wordData = wordsToFindData.find(w => t(w.wordKey) === word);
        if (wordData) {
            setActiveDefinition({
                word: t(wordData.wordKey),
                definition: t(wordData.definitionKey),
                example: t(wordData.exampleKey),
            });
        }
    };

    const checkSelection = (currentSelection: Coords[]) => {
        if (currentSelection.length < 2 || !gridData) return;
        
        let selectedString = currentSelection.map(c => gridData.grid[c.row][c.col]).join('');
        let reversedSelectedString = selectedString.split('').reverse().join('');

        for (const word of wordsToFind) {
            if (!foundWords.has(word) && (word === selectedString || word === reversedSelectedString)) {
                const newFoundWords = new Set(foundWords).add(word);
                setFoundWords(newFoundWords);
                showDefinition(word);
                return; 
            }
        }
    };
    
    const getCoordsFromEvent = (e: React.MouseEvent | React.TouchEvent): Coords | null => {
        const target = e.target as HTMLElement;
        if (!target.matches('.ws-cell')) return null;
        const row = parseInt(target.dataset.row || '-1');
        const col = parseInt(target.dataset.col || '-1');
        if (row === -1 || col === -1) return null;
        return { row, col };
    };

    const handleInteractionStart = (e: React.MouseEvent | React.TouchEvent) => {
        e.preventDefault();
        const coords = getCoordsFromEvent(e);
        if (coords) {
            setIsSelecting(true);
            setSelection([coords]);
        }
    };

    const handleInteractionMove = (e: React.MouseEvent | React.TouchEvent) => {
        if (!isSelecting) return;
        e.preventDefault();
        
        const touchEvent = e.nativeEvent as TouchEvent;
        const clientX = 'touches' in touchEvent ? touchEvent.touches[0].clientX : (e as React.MouseEvent).clientX;
        const clientY = 'touches' in touchEvent ? touchEvent.touches[0].clientY : (e as React.MouseEvent).clientY;

        const element = document.elementFromPoint(clientX, clientY);
        if (element && element.matches('.ws-cell')) {
            const row = parseInt((element as HTMLElement).dataset.row || '-1');
            const col = parseInt((element as HTMLElement).dataset.col || '-1');
            const newCoord = { row, col };

            if (!selection.some(c => c.row === newCoord.row && c.col === newCoord.col)) {
                if (selection.length < 2) {
                    setSelection(prev => [...prev, newCoord]);
                } else {
                    const start = selection[0];
                    const second = selection[1];
                    const dx = second.col - start.col;
                    const dy = second.row - start.row;
                    const new_dx = newCoord.col - start.col;
                    const new_dy = newCoord.row - start.row;
                    
                    if (dy * new_dx === dx * new_dy) {
                         setSelection(prev => [...prev, newCoord]);
                    }
                }
            }
        }
    };

    const handleInteractionEnd = () => {
        setIsSelecting(false);
        checkSelection(selection);
        setSelection([]);
    };

    const isCellFound = (row: number, col: number) => {
        for (const word of foundWords) {
            const coords = gridData?.placedWords.get(word);
            if (coords?.some(c => c.row === row && c.col === col)) {
                return true;
            }
        }
        return false;
    };
    
    if (!gridData) return <div>Loading...</div>;
    
    const allFound = foundWords.size === wordsToFind.length;

    return (
        <div className="mt-4 space-y-4 animate-fade-in-up">
            <div 
                ref={gridRef}
                className="ws-grid" 
                style={{ gridTemplateColumns: `repeat(${node.gridSize}, 1fr)` }}
                onMouseDown={handleInteractionStart}
                onMouseMove={handleInteractionMove}
                onMouseUp={handleInteractionEnd}
                onMouseLeave={handleInteractionEnd}
                onTouchStart={handleInteractionStart}
                onTouchMove={handleInteractionMove}
                onTouchEnd={handleInteractionEnd}
            >
                {gridData.grid.map((rowItems, rowIndex) =>
                    rowItems.map((cell, colIndex) => {
                        const isSelected = selection.some(c => c.row === rowIndex && c.col === colIndex);
                        const isFound = isCellFound(rowIndex, colIndex);
                        const cellClasses = `ws-cell ${isSelected ? 'selected' : ''} ${isFound ? 'found' : ''}`;
                        return (
                            <div key={`${rowIndex}-${colIndex}`} className={cellClasses} data-row={rowIndex} data-col={colIndex}>
                                {cell}
                            </div>
                        );
                    })
                )}
            </div>

            <div className="ws-word-list">
                {wordsToFind.map(word => (
                    <div key={word} className={`ws-word ${foundWords.has(word) ? 'found' : ''}`}>
                        {word}
                    </div>
                ))}
            </div>
            
            <div className="text-center pt-4">
                {allFound ? (
                    <button onClick={() => onComplete(Array.from(foundWords))} className="ws-submit-button">
                        {t('btn_finish_quiz')}
                    </button>
                ) : (
                    <button onClick={onSkip} className="ws-skip-button">
                        {t('btn_skip_question')}
                    </button>
                )}
            </div>
            <DefinitionPopup definition={activeDefinition} onClose={() => setActiveDefinition(null)} t={t} />
        </div>
    );
};

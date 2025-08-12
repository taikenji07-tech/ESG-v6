
import React, { useState, useMemo, useRef } from 'react';
import type { DragDropQuizNode, Language } from './types';
import { translations } from './translations';

interface DragDropQuizProps {
    node: DragDropQuizNode;
    onComplete: (isCorrect: boolean) => void;
    language: Language;
}

type Placements = Record<string, string | null>;

export const DragDropQuiz: React.FC<DragDropQuizProps> = ({ node, onComplete, language }) => {
    const t = (key: string) => translations[language][key] || key;

    const shuffledTargets = useMemo(() => [...node.targets].sort(() => Math.random() - 0.5), [node.targets]);

    const initialPlacements = useMemo(() => node.targets.reduce((acc, target) => {
        acc[target.id] = null;
        return acc;
    }, {} as Placements), [node.targets]);
    
    const [placements, setPlacements] = useState<Placements>(initialPlacements);
    const [draggedItem, setDraggedItem] = useState<string | null>(null);
    const [dragOverTarget, setDragOverTarget] = useState<string | null>(null);
    
    const [ghost, setGhost] = useState<{
        itemId: string;
        x: number;
        y: number;
        width: number;
        height: number;
    } | null>(null);

    const shuffledItems = useMemo(() => [...node.items].sort(() => Math.random() - 0.5), [node.items]);
    const unplacedItems = shuffledItems.filter(item => !Object.values(placements).includes(item.id));
    
    // --- Refs for advanced touch D&D with auto-scroll ---
    const quizRootRef = useRef<HTMLDivElement>(null);
    const dropTargetElements = useRef<Record<string, HTMLElement | null>>({});
    const dropTargetRects = useRef<Record<string, DOMRect> | null>(null);
    const scrollIntervalRef = useRef<number | null>(null);

    // --- Auto-scroll Logic ---
    const stopAutoScroll = () => {
        if (scrollIntervalRef.current) {
            cancelAnimationFrame(scrollIntervalRef.current);
            scrollIntervalRef.current = null;
        }
    };
    
    const updateTargetRects = () => {
        const rects: Record<string, DOMRect> = {};
        Object.keys(dropTargetElements.current).forEach(key => {
            const el = dropTargetElements.current[key];
            if (el) {
                rects[key] = el.getBoundingClientRect();
            }
        });
        dropTargetRects.current = rects;
    };

    const startAutoScroll = (direction: 'up' | 'down') => {
        stopAutoScroll();

        const scrollableParent = quizRootRef.current?.closest('.custom-scrollbar');
        if (!scrollableParent) return;
        
        const scroll = () => {
            const scrollAmount = direction === 'up' ? -10 : 10;
            scrollableParent.scrollTop += scrollAmount;
            
            updateTargetRects(); // Recalculate rects as we scroll

            // Continue scrolling
            scrollIntervalRef.current = requestAnimationFrame(scroll);
        };
        
        scrollIntervalRef.current = requestAnimationFrame(scroll);
    };


    // --- Shared Drop Logic ---
    const performDrop = (targetId: string) => {
        if (!draggedItem) return;

        const newPlacements = { ...placements };
        const oldTargetKey = Object.keys(newPlacements).find(key => newPlacements[key] === draggedItem);
        
        if (targetId === 'unplaced') {
            if (oldTargetKey) newPlacements[oldTargetKey] = null;
        } else {
            const itemInTarget = newPlacements[targetId];
            if (oldTargetKey) {
                newPlacements[oldTargetKey] = itemInTarget;
            }
            newPlacements[targetId] = draggedItem;
        }
        
        setPlacements(newPlacements);
    };

    // --- Mouse Event Handlers (Unchanged) ---
    const handleDragStart = (e: React.DragEvent<HTMLDivElement>, itemId: string) => {
        setDraggedItem(itemId);
        e.dataTransfer.effectAllowed = 'move';
    };

    const handleDragEnd = () => {
        setDraggedItem(null);
        setDragOverTarget(null);
    };
    
    const handleDrop = (e: React.DragEvent<HTMLDivElement>, targetId: string) => {
        e.preventDefault();
        performDrop(targetId);
        setDraggedItem(null);
        setDragOverTarget(null);
    };
    
    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => e.preventDefault();
    const handleDragEnter = (targetId: string) => {
        if (draggedItem) {
           setDragOverTarget(targetId);
        }
    };

    // --- Touch Event Handlers (Enhanced with Auto-Scroll) ---
    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>, itemId: string) => {
        const touch = e.touches[0];
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        setDraggedItem(itemId);
        setGhost({
            itemId,
            x: touch.clientX,
            y: touch.clientY,
            width: rect.width,
            height: rect.height,
        });
        updateTargetRects(); // Cache target positions
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        if (!draggedItem || !ghost) return;
        
        if (e.cancelable) {
            e.preventDefault();
        }
        
        const touch = e.touches[0];
        setGhost(prev => prev ? { ...prev, x: touch.clientX, y: touch.clientY } : null);

        // --- Drop Target Detection (from cached rects) ---
        let activeTargetId: string | null = null;
        if (dropTargetRects.current) {
            for (const targetId in dropTargetRects.current) {
                const rect = dropTargetRects.current[targetId];
                if (
                    touch.clientX >= rect.left && touch.clientX <= rect.right &&
                    touch.clientY >= rect.top && touch.clientY <= rect.bottom
                ) {
                    activeTargetId = targetId;
                    break;
                }
            }
        }
        setDragOverTarget(activeTargetId);

        // --- Auto-Scroll Trigger ---
        const viewportHeight = window.innerHeight;
        const scrollThreshold = 80;

        if (touch.clientY < scrollThreshold) {
            startAutoScroll('up');
        } else if (touch.clientY > viewportHeight - scrollThreshold) {
            startAutoScroll('down');
        } else {
            stopAutoScroll();
        }
    };
    
    const handleTouchEnd = () => {
        stopAutoScroll();
        if (draggedItem && dragOverTarget) {
            performDrop(dragOverTarget);
        }
        setDraggedItem(null);
        setDragOverTarget(null);
        setGhost(null);
        dropTargetRects.current = null;
    };

    const handleCheckAnswer = () => {
        const isCorrect = node.targets.every(target => placements[target.id] === target.correctItemId);
        onComplete(isCorrect);
    };

    const allPlaced = unplacedItems.length === 0;
    
    const renderDraggableItem = (item: typeof node.items[0]) => (
        <div
            key={item.id}
            draggable
            onDragStart={(e) => handleDragStart(e, item.id)}
            onDragEnd={handleDragEnd}
            onTouchStart={(e) => handleTouchStart(e, item.id)}
            className={`dd-item ${draggedItem === item.id ? 'dragging' : ''}`}
        >
            {t(item.textKey)}
        </div>
    );

    return (
        <div 
            ref={quizRootRef}
            className="mt-4 space-y-4 animate-fade-in-up"
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            {/* Ghost element for touch drag feedback */}
            {ghost && (
                <div
                    className="dd-item fixed pointer-events-none z-50"
                    style={{
                        width: `${ghost.width}px`,
                        height: `${ghost.height}px`,
                        left: `${ghost.x}px`,
                        top: `${ghost.y}px`,
                        transform: `translate(-50%, -50%) scale(1.1)`,
                        boxShadow: '0 8px 20px var(--shadow-color)',
                        opacity: 0.95,
                    }}
                >
                    {t(node.items.find(i => i.id === ghost.itemId)!.textKey)}
                </div>
            )}

            {/* Drop Zones */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {shuffledTargets.map(target => {
                    const placedItem = node.items.find(item => item.id === placements[target.id]);
                    const isDragOver = dragOverTarget === target.id;
                    return (
                        <div
                            key={target.id}
                            ref={el => { dropTargetElements.current[target.id] = el; }}
                            onDrop={(e) => handleDrop(e, target.id)}
                            onDragOver={handleDragOver}
                            onDragEnter={() => handleDragEnter(target.id)}
                            className={`dd-target dd-target-${target.id} ${isDragOver ? 'drag-over' : ''}`}
                            data-target-id={target.id}
                        >
                            <div className="dd-target-label">{t(target.labelKey)}</div>
                            <div className="flex-grow flex items-center justify-center min-h-[4rem]">
                                {placedItem ? renderDraggableItem(placedItem) : (
                                    <span className="text-sm text-text-dim">{t('Drop here')}</span>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Unplaced Items Area */}
            <div 
                ref={el => { dropTargetElements.current['unplaced'] = el; }}
                className="dd-item-source"
                onDrop={(e) => handleDrop(e, 'unplaced')}
                onDragOver={handleDragOver}
                onDragEnter={() => handleDragEnter('unplaced')}
                data-target-id="unplaced"
            >
                {unplacedItems.map(renderDraggableItem)}
                {unplacedItems.length === 0 && <p className="text-sm w-full text-center text-text-dim">{t('All items placed!')}</p>}
            </div>


            {/* Submit Button */}
            {allPlaced && (
                <div className="text-center pt-4">
                    <button
                        onClick={handleCheckAnswer}
                        className="dd-submit-button"
                    >
                        {t('btn_check_answer')}
                    </button>
                </div>
            )}
        </div>
    );
};

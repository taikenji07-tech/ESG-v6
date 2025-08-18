
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Header } from './Header';
import { BackgroundEffects } from './BackgroundEffects';
import { SendIcon, Avatar1Icon, Avatar2Icon, Avatar3Icon, Avatar4Icon } from './Icons';
import { BadgeNotification } from './BadgeNotification';
import { CelebrationModal } from './CelebrationModal';
import { DragDropQuiz } from './DragDropQuiz';
import { WordSearchQuiz } from './WordSearchQuiz';
import { ToastNotification } from './ToastNotification';
import { ProgressMilestonePopup } from './ProgressMilestonePopup';
import { decisionTree, quizOrder, progressNodes, totalProgressSteps, BADGES, WORD_SEARCH_POOL } from './constants';
import { translations } from './translations';
import type { Message, NodeId, DecisionTree, Node, Button, GameState, Badge, LoopQuestionNode, Language, DragDropQuizNode, WordSearchQuizNode } from './types';
import { getDynamicResponse, translateToMalay, submitToGoogleForm, validateEmailWithAI, getAIImpactReminder } from './geminiService';

const avatarIconMap: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
    avatar1: Avatar1Icon,
    avatar2: Avatar2Icon,
    avatar3: Avatar3Icon,
    avatar4: Avatar4Icon,
};

// Points configuration for the quiz section
const QUIZ_POINTS: Record<string, number> = {
    'quiz_q1': 100,
    'quiz_q2': 100,
    'quiz_q3': 100,
    'quiz_q4': 100,
    'quiz_q5': 100,
    'quiz_q8': 200,
};

const ChatMessage: React.FC<{
    message: Message;
    onOptionClick: (nextNodeId: NodeId, branchKey: string, buttonText: string, type?: 'show_certificate' | 'copy_text' | 'external_link') => void;
    onDragDropQuizComplete: (isCorrect: boolean) => void;
    onWordSearchQuizComplete: (foundWords: string[]) => void;
    onWordSearchQuizSkip: () => void;
    userAvatar: string;
}> = ({ message, onOptionClick, onDragDropQuizComplete, onWordSearchQuizComplete, onWordSearchQuizSkip, userAvatar }) => {
    
    const formatMessageContent = (text: string) => {
        return text
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/(\r\n|\n|\r)/gm, '<br/>');
    };

    if (message.sender === 'user') {
        const UserAvatarComponent = avatarIconMap[userAvatar];
        return (
            <div className="flex justify-end animate-slide-in-up">
                <div className="flex items-start gap-3 flex-row-reverse">
                    <div className="w-16 h-16 rounded-full bg-[var(--surface-b)] flex items-center justify-center flex-shrink-0 shadow-md border border-[var(--border-color)] p-1 overflow-hidden">
                        {UserAvatarComponent && <UserAvatarComponent className="w-full h-full" />}
                    </div>
                    <div className="user-bubble chat-bubble">
                        {message.text}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex justify-start animate-slide-in-up">
            <div className="flex items-start gap-3">
                <div className="w-16 h-16 rounded-full bg-[var(--surface-b)] flex items-center justify-center flex-shrink-0 shadow-md border border-[var(--border-color)] overflow-hidden">
                     <img src="https://i.imgur.com/YAKWkLu.png" alt="Chatbot Avatar" className="w-full h-full object-cover transform -scale-x-100" />
                </div>
                <div className="bot-bubble chat-bubble">
                    <div dangerouslySetInnerHTML={{ __html: formatMessageContent(message.text) }} />
                    {message.buttons && (
                        <div className="mt-4 space-y-2 animate-fade-in-up">
                            {message.buttons.map((button, index) => (
                                <button
                                    key={index}
                                    onClick={() => onOptionClick(button.nextNode, button.branchKey || '', button.text, button.type)}
                                    className="message-button"
                                >
                                    {button.text}
                                </button>
                            ))}
                        </div>
                    )}
                    {message.quizData && message.quizData.type === 'QUIZ_DRAG_DROP' && (
                        <DragDropQuiz node={message.quizData} onComplete={onDragDropQuizComplete} language={message.language!} />
                    )}
                    {message.quizData && message.quizData.type === 'QUIZ_WORD_SEARCH' && (
                        <WordSearchQuiz 
                            node={message.quizData} 
                            wordPool={WORD_SEARCH_POOL}
                            onComplete={onWordSearchQuizComplete} 
                            onSkip={onWordSearchQuizSkip} 
                            language={message.language!}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

const App: React.FC = () => {
    const initialGameState: GameState = {
        score: 0,
        streak: 0,
        unlockedBadges: new Set(),
        quizCorrectAnswers: 0,
        userName: '',
        certificateName: '',
        email: '',
        university: '',
        major: '',
        lastQuestionId: '',
        visitedProgressNodes: new Set(),
        visitedSecondaryBranches: {},
        quizCompleted: false,
        q6Attempts: 0,
        q7Attempts: 0,
        q8Skipped: false,
        esgBreakdownCompleted: false,
        certificateClaimed: false,
    };

    const [gameState, setGameState] = useState<GameState>(initialGameState);
    const [messages, setMessages] = useState<Message[]>([]);
    const [currentNodeId, setCurrentNodeId] = useState<NodeId>('start');
    const [inputVisible, setInputVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [visitedLoopBranches, setVisitedLoopBranches] = useState(new Set<string>());
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    const [language, setLanguage] = useState<Language>('en');
    const [activeBadge, setActiveBadge] = useState<Badge | null>(null);
    const [appPhase, setAppPhase] = useState<'avatar_selection' | 'chat'>('avatar_selection');
    const [userAvatar, setUserAvatar] = useState<string>('avatar1');
    const [showCelebration, setShowCelebration] = useState(false);
    const [toast, setToast] = useState<string | null>(null);
    const [milestoneText, setMilestoneText] = useState<string | null>(null);

    const chatContainerRef = useRef<HTMLDivElement>(null);
    const dynamicResponseTextRef = useRef<string | null>(null);
    const userInteractionCount = useRef(0);
    
    const t = (key: string, replacements?: Record<string, string | number>): string => {
        let text = translations[language][key] || key;
        if (replacements) {
            Object.keys(replacements).forEach(rKey => {
                text = text.replace(`{${rKey}}`, String(replacements[rKey]));
            });
        }
        return text;
    };

    const scrollToBottom = useCallback((behavior: 'smooth' | 'auto' = 'smooth') => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTo({
                top: chatContainerRef.current.scrollHeight,
                behavior: behavior
            });
        }
    }, []);

    useEffect(() => {
        // Add a small delay to make the scroll feel more natural and less jarring.
        const timer = setTimeout(() => {
            scrollToBottom();
        }, 100);
        return () => clearTimeout(timer);
    }, [messages.length, scrollToBottom]);
    
    // Handles layout shifts when the virtual keyboard appears on mobile
    useEffect(() => {
        if (inputVisible) {
            const timer = setTimeout(() => scrollToBottom(), 300); // 300ms delay to allow keyboard to animate
            return () => clearTimeout(timer);
        }
    }, [inputVisible, scrollToBottom]);
    
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);
    
    const addMessage = (message: Omit<Message, 'id'> & {id?: number}, buttonsToRemoveId?: number) => {
        setMessages(prev => {
            let updatedMessages = prev;
            if (buttonsToRemoveId) {
                updatedMessages = updatedMessages.map(msg => 
                    msg.id === buttonsToRemoveId ? { ...msg, buttons: undefined, quizData: undefined } : msg
                );
            }
            const messageWithLang = { ...message, language };
            return [...updatedMessages, { ...messageWithLang, id: message.id ?? Date.now() + Math.random() }];
        });
    };

    const updateScore = (points: number) => {
        setGameState(prev => {
            if (prev.quizCompleted && currentNodeId !== 'quiz_end') return prev;
            
            // Cannot reach 1000 if Q8 was skipped
            const scoreCap = prev.q8Skipped ? 999 : 1000;
            const newScore = Math.min(scoreCap, prev.score + points);
            return { ...prev, score: newScore };
        });
    };

    const showBadge = (id: string) => {
        if (gameState.unlockedBadges.has(id)) return;
        
        const badge = BADGES.find(b => b.id === id);
        if (!badge) return;

        setGameState(prev => {
            const newBadges = new Set(prev.unlockedBadges);
            newBadges.add(id);
            return { ...prev, unlockedBadges: newBadges };
        });
        
        setActiveBadge(badge);
        setTimeout(() => setActiveBadge(null), 3500);
    };

    // Check for badge unlocks when score changes
    useEffect(() => {
        for (const badge of BADGES) {
            if (gameState.score >= badge.score && !gameState.unlockedBadges.has(badge.id)) {
                showBadge(badge.id);
            }
        }
    }, [gameState.score, gameState.unlockedBadges]);
    
    const resetGame = () => {
        userInteractionCount.current = 0;
        setGameState(initialGameState);
        setMessages([]);
        setVisitedLoopBranches(new Set());
        setCurrentNodeId('start');
        setAppPhase('avatar_selection');
        setShowCelebration(false);
    };

    useEffect(() => {
        if (appPhase !== 'chat') return;
        
        // --- LEARNING PROGRESS SCORING ---
        if (progressNodes.has(currentNodeId) && !gameState.quizCompleted) {
            const isNewNode = !gameState.visitedProgressNodes.has(currentNodeId);
            if (isNewNode) {
                setGameState(prev => {
                    const newVisited = new Set(prev.visitedProgressNodes).add(currentNodeId);
                    
                    // Do not award points for the initial 'start' node
                    if (currentNodeId === 'start') {
                        return { ...prev, visitedProgressNodes: newVisited };
                    }
                    
                    const oldProgressScore = Math.floor((prev.visitedProgressNodes.size / totalProgressSteps) * 200);
                    const newProgressScore = Math.floor((newVisited.size / totalProgressSteps) * 200);
                    const pointsFromLearning = newProgressScore - oldProgressScore;
                    const newTotalScore = Math.min(1000, prev.score + pointsFromLearning);
                    
                    return {
                        ...prev,
                        visitedProgressNodes: newVisited,
                        score: newTotalScore,
                    };
                });
            }
        }

        const node: Node = (decisionTree as DecisionTree)[currentNodeId];
        if (!node) return;

        if (node.type === 'REDIRECT' || node.type === 'REDIRECT_QUIZ') {
            const nextNodeId = node.type === 'REDIRECT' ? node.nextNode : (() => {
                const currentIndex = quizOrder.indexOf(gameState.lastQuestionId);
                return (currentIndex === -1 || currentIndex >= quizOrder.length - 1) 
                    ? 'quiz_end' 
                    : quizOrder[currentIndex + 1];
            })();
            setCurrentNodeId(nextNodeId);
            return;
        }

        // --- QUIZ SCORING (for nodes with isCorrect flag like MCQs and Drag&Drop) ---
        if (node.isCorrect !== undefined) {
            const questionId = gameState.lastQuestionId;
            const basePoints = QUIZ_POINTS[questionId as keyof typeof QUIZ_POINTS];

            if (node.isCorrect) {
                if (basePoints) {
                    let pointsToAdd = basePoints;
                    if (gameState.streak > 0) {
                        pointsToAdd += 20;
                    }
                    updateScore(pointsToAdd);
                }
                setGameState(prev => ({
                    ...prev,
                    streak: prev.streak + 1,
                    quizCorrectAnswers: prev.quizCorrectAnswers + 1
                }));
            } else { // Incorrect answer
                setGameState(prev => ({ ...prev, streak: 0 }));
            }
        }
        
        const processNode = async () => {
            let messageText: string;
            const replacements: Record<string, string | number> = {
                userName: gameState.userName,
                score: Math.round(gameState.score),
                quizCorrectAnswers: gameState.quizCorrectAnswers,
                major: gameState.major,
            };

            if (currentNodeId.startsWith('share_prompt')) {
                const shareText = t('linkedin_share_text', { score: Math.round(gameState.score) });
                const backNode = currentNodeId === 'share_prompt_after_claim' ? 'post_claim_options_revisit' : 'quiz_end_revisit';
                
                const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                let shareButtons: Button[];

                if (isMobileDevice) {
                    // Mobile: Use the reliable two-button copy/paste flow.
                    shareButtons = [
                        { text: t('btn_copy_text'), nextNode: '#', type: 'copy_text' },
                        { text: t('btn_open_linkedin'), nextNode: 'https://www.linkedin.com/feed/', type: 'external_link' }
                    ];
                } else {
                    // Desktop: Use the 'shareArticle' URL to pre-fill the post text directly for a classic sharing flow.
                    const encodedText = encodeURIComponent(shareText);
                    const linkedInShareUrl = `https://www.linkedin.com/shareArticle?mini=true&text=${encodedText}`;
                    
                    shareButtons = [
                        { text: t('btn_share_linkedin'), nextNode: linkedInShareUrl, type: 'external_link' }
                    ];
                }

                const allButtons = [
                    ...shareButtons,
                    { text: t('btn_back_to_final_options'), nextNode: backNode }
                ];

                addMessage({
                    sender: 'bot',
                    text: t('share_prompt_text'),
                    buttons: allButtons,
                    shareableText: shareText
                });
                return;
            }

            if (currentNodeId === 'quiz_end' || currentNodeId === 'final_thanks_no_quiz') {
                const totalCo2 = userInteractionCount.current * 2.5;
                const acMinutes = Math.round(totalCo2 / 6);
                const carKm = (totalCo2 / 200).toFixed(2);
                
                replacements.co2 = totalCo2.toFixed(1);
                replacements.acMinutes = acMinutes;
                replacements.carKm = carKm;

                const aiReminder = await getAIImpactReminder(totalCo2, language);
                replacements.aiReminder = aiReminder;
            }
            
            if (node.isDynamic && dynamicResponseTextRef.current) {
                messageText = dynamicResponseTextRef.current
                    .replace(/{userName}/g, gameState.userName)
                    .replace(/{major}/g, gameState.major);
                dynamicResponseTextRef.current = null;
            } else {
                 messageText = t(node.text, replacements);
            }
            
            let messageButtons: Button[] | undefined = undefined;
            let quizData: DragDropQuizNode | WordSearchQuizNode | undefined = undefined;

            const personalEsgPillarNodes = ['personal_esg_pillar_e_answer', 'personal_esg_pillar_s_answer', 'personal_esg_pillar_g_answer'];
            const relevanceHubAnswerNodes = ['relevance_career_answer', 'relevance_consumer_answer', 'relevance_community_answer'];

            if (node.type === 'ANSWER' && personalEsgPillarNodes.includes(currentNodeId)) {
                const hubNode = decisionTree['personal_esg_pillars_hub'] as LoopQuestionNode;
                const visitedPillars = gameState.visitedSecondaryBranches['personal_esg_pillars_hub'] || new Set();

                const hubBranches = hubNode.branches;
                const currentPillarKey = Object.keys(hubBranches).find(key => hubBranches[key].nextNode === currentNodeId);
                const tempVisitedPillars = new Set(visitedPillars);
                if (currentPillarKey) {
                   tempVisitedPillars.add(currentPillarKey);
                }
               
                if (tempVisitedPillars.size === Object.keys(hubNode.branches).length) {
                    const moreImportanceVisitedSet = gameState.visitedSecondaryBranches['more_importance_esg'] || new Set();
                    
                    if (!moreImportanceVisitedSet.has('matter_as_student')) {
                        messageButtons = [{
                            text: t('btn_matter_as_student'),
                            nextNode: 'matter_as_student_answer'
                        }];
                    } else {
                        messageButtons = [{
                           text: t('btn_back_to_main_topics'),
                           nextNode: 'end_branch'
                        }];
                    }
                } else {
                   messageButtons = node.buttons?.map(btn => ({ ...btn, text: t(btn.text) })) || [];
                }
            } else if (node.type === 'ANSWER' && relevanceHubAnswerNodes.includes(currentNodeId)) {
                const hubNode = decisionTree['relevance_hub'] as LoopQuestionNode;
                const visitedBranches = gameState.visitedSecondaryBranches['relevance_hub'] || new Set();
                
                const hubBranches = hubNode.branches;
                const currentBranchKey = Object.keys(hubBranches).find(key => hubBranches[key].nextNode === currentNodeId);
                const tempVisitedBranches = new Set(visitedBranches);
                if (currentBranchKey) {
                    tempVisitedBranches.add(currentBranchKey);
                }

                if (tempVisitedBranches.size === Object.keys(hubBranches).length) {
                     messageButtons = [{
                        text: t('btn_continue_to_career_opps'),
                        nextNode: hubNode.nextNode
                    }];
                } else {
                    messageButtons = node.buttons?.map(btn => ({ ...btn, text: t(btn.text) })) || [];
                }

            } else if (node.type === 'QUIZ_DRAG_DROP' || node.type === 'QUIZ_WORD_SEARCH') {
                quizData = node;
            } else if (node.type === 'LOOP_QUESTION') {
                const isSecondary = !!node.parentLoop;
                const loopKey = isSecondary ? currentNodeId : 'main_loop';
                const visitedSet = isSecondary ? (gameState.visitedSecondaryBranches[loopKey] || new Set()) : visitedLoopBranches;
                const remainingBranches = Object.keys(node.branches).filter(key => !visitedSet.has(key));

                if (remainingBranches.length === 0) {
                    if (currentNodeId === 'main_loop') {
                        setGameState(prev => ({ 
                            ...prev, 
                            score: 200,
                            visitedProgressNodes: new Set(progressNodes) 
                        }));
                    }
                    setCurrentNodeId(node.nextNode);
                    return;
                }
                
                if (visitedSet.size > 0) {
                    if (currentNodeId === 'more_importance_esg') {
                        const remainingBranchKey = remainingBranches[0];
                        let key: string;
                        if (remainingBranchKey === 'matter_as_student') {
                            key = 'more_importance_esg_revisit_text_matter_as_student';
                        } else if (remainingBranchKey === 'personal_esg') {
                            key = 'more_importance_esg_revisit_text_personal_esg';
                        } else {
                            key = 'more_importance_esg_revisit_text';
                        }
                        messageText = t(key);
                    } else { 
                        let revisitTextKey = 'main_loop_revisit_text';
                        if (isSecondary) {
                           if (currentNodeId === 'personal_esg_pillars_hub') {
                               revisitTextKey = 'personal_esg_pillars_hub_revisit_text';
                           } else if (currentNodeId === 'relevance_hub') {
                               revisitTextKey = 'relevance_hub_revisit_text';
                           } else {
                               revisitTextKey = 'more_importance_esg_revisit_text';
                           }
                        }
                        messageText = t(revisitTextKey, { userName: gameState.userName });
                    }
                }
                
                messageButtons = remainingBranches.map(key => ({
                    ...node.branches[key],
                    text: t(node.branches[key].text),
                    branchKey: key
                }));

            } else if ((node.type === 'QUESTION' || node.type === 'ANSWER') && node.buttons) {
                let currentButtons = node.buttons;
                if (currentNodeId === 'quiz_end' && gameState.certificateClaimed) {
                    currentButtons = currentButtons.filter(btn => btn.type !== 'show_certificate');
                }
                messageButtons = currentButtons.map(btn => ({ ...btn, text: t(btn.text) }));
            }
            
            addMessage({ 
                sender: 'bot', 
                text: messageText, 
                buttons: messageButtons, 
                quizData: quizData 
            });

            setInputVisible(node.type === 'PROMPT');
            if (node.type === 'PROMPT') {
                 setTimeout(() => document.getElementById('user-input')?.focus(), 100);
            }
        };

        processNode();
    }, [currentNodeId, gameState.quizCompleted, language, appPhase, gameState.certificateClaimed]);

    const handleAvatarSelect = (avatarId: string) => {
        userInteractionCount.current++;
        setUserAvatar(avatarId);
        setAppPhase('chat');
    };

    const handleOptionClick = async (nextNodeId: NodeId, branchKey: string, buttonText: string, type?: 'show_certificate' | 'copy_text' | 'external_link') => {
        userInteractionCount.current++;
        const lastMessage = messages[messages.length-1];

        if (type === 'external_link') {
            window.open(nextNodeId, '_blank', 'noopener,noreferrer');
            return;
        }

        if (type === 'copy_text') {
            const messageWithText = messages.find(m => m.id === lastMessage.id);
            if (messageWithText?.shareableText) {
                navigator.clipboard.writeText(messageWithText.shareableText);
                setToast(t('toast_copied'));
            }
            return;
        }
        
        if (nextNodeId === 'end_curriculum') {
            setShowCelebration(true);
            return;
        }

        if (type === 'show_certificate') {
            addMessage({ sender: 'user', text: buttonText }, lastMessage.id);
            setGameState(prev => ({...prev, certificateClaimed: true}));

            // Fire-and-forget submission
            submitToGoogleForm({
                name: gameState.certificateName,
                email: gameState.email,
                university: gameState.university,
                score: Math.round(gameState.score)
            }).then(success => {
                if (!success) {
                    // Optionally handle submission failure, e.g., show a toast.
                    console.error("Certificate submission failed in the background.");
                }
            });

            setCurrentNodeId('post_claim_options');
            return;
        }

        addMessage({ sender: 'user', text: buttonText }, lastMessage.id);
        
        const personalEsgPillarNodes = ['personal_esg_pillar_e_answer', 'personal_esg_pillar_s_answer', 'personal_esg_pillar_g_answer'];
        if (nextNodeId === 'matter_as_student_answer' && personalEsgPillarNodes.includes(currentNodeId)) {
            // This is the special transition from the personal ESG pillars to the "matter as student" topic.
            // We need to manually mark 'matter_as_student' as visited for its parent loop ('more_importance_esg').
            setGameState(prev => {
                const newVisitedSecondary = { ...prev.visitedSecondaryBranches };
                const newSet = new Set(newVisitedSecondary['more_importance_esg'] || []);
                newSet.add('matter_as_student');
                newVisitedSecondary['more_importance_esg'] = newSet;
                return { ...prev, visitedSecondaryBranches: newVisitedSecondary };
            });
        }
        
        if (nextNodeId === 'start') {
            resetGame();
            return;
        }

        if (nextNodeId === 'restart_quiz') {
            setGameState(prev => ({
                ...prev,
                score: Math.floor((prev.visitedProgressNodes.size / totalProgressSteps) * 200),
                streak: 0,
                quizCorrectAnswers: 0,
                lastQuestionId: '',
                quizCompleted: false,
                q6Attempts: 0,
                q7Attempts: 0,
                q8Skipped: false,
            }));
            setCurrentNodeId('quiz_q1');
            return;
        }
        
        if (nextNodeId === 'quiz_end' && !gameState.quizCompleted) {
            setGameState(prev => ({...prev, quizCompleted: true}));
        }

        if (quizOrder.includes(currentNodeId)) {
            setGameState(prev => ({...prev, lastQuestionId: currentNodeId}));
        }

        const previousNode = decisionTree[currentNodeId];
        
        if (previousNode.type === 'LOOP_QUESTION') {
            const topicKey = branchKey;
            const isMainLoop = !previousNode.parentLoop;

            if (isMainLoop) {
                if (!visitedLoopBranches.has(topicKey)) {
                    const newVisited = new Set(visitedLoopBranches).add(topicKey);
                    setVisitedLoopBranches(newVisited);
                }
            } else {
                 setGameState(prev => {
                    const newVisitedSecondary = { ...prev.visitedSecondaryBranches };
                    const newSet = new Set(newVisitedSecondary[currentNodeId] || []);
                    newSet.add(branchKey);
                    newVisitedSecondary[currentNodeId] = newSet;

                    if (currentNodeId === 'esg_breakdown_hub' && newSet.size === 3 && !prev.esgBreakdownCompleted) {
                        const scoreCap = prev.q8Skipped ? 999 : 1000;
                        const newScore = Math.min(scoreCap, prev.score + 23);
                        return {
                            ...prev,
                            score: newScore,
                            esgBreakdownCompleted: true,
                            visitedSecondaryBranches: newVisitedSecondary
                        };
                    }

                    return { ...prev, visitedSecondaryBranches: newVisitedSecondary };
                });
            }
        }
        
        setCurrentNodeId(nextNodeId);
    };

    const handleDragDropQuizComplete = (isCorrect: boolean) => {
        userInteractionCount.current++;
        const lastMessage = messages[messages.length - 1];
        addMessage({ sender: 'user', text: t('btn_check_answer') }, lastMessage.id);
        
        setGameState(prev => ({ ...prev, lastQuestionId: 'quiz_q1' }));

        const node = decisionTree['quiz_q1'] as DragDropQuizNode;
        setCurrentNodeId(isCorrect ? node.nextNode : node.incorrectNextNode);
    };

    const handleWordSearchQuizComplete = () => {
        userInteractionCount.current++;
        const lastMessage = messages[messages.length - 1];
        addMessage({ sender: 'user', text: t('btn_finish_quiz') }, lastMessage.id);
        
        const basePoints = QUIZ_POINTS['quiz_q8'];
        let pointsToAdd = basePoints;
        if (gameState.streak > 0) {
            pointsToAdd += 20;
        }
        
        setGameState(prev => ({ ...prev, q8Skipped: false }));
        updateScore(pointsToAdd);
        
        setGameState(prev => ({
            ...prev,
            lastQuestionId: 'quiz_q8',
            streak: prev.streak + 1,
            quizCorrectAnswers: prev.quizCorrectAnswers + 1,
        }));

        const node = decisionTree['quiz_q8'] as WordSearchQuizNode;
        setCurrentNodeId(node.nextNode);
    };

    const handleWordSearchQuizSkip = () => {
        userInteractionCount.current++;
        const lastMessage = messages[messages.length - 1];
        addMessage({ sender: 'user', text: t('btn_skip_question') }, lastMessage.id);

        setToast(t('toast_q8_skipped'));

        setGameState(prev => ({ 
            ...prev, 
            lastQuestionId: 'quiz_q8',
            streak: 0, // Skipping breaks the streak
            q8Skipped: true,
        }));

        const node = decisionTree['quiz_q8'] as WordSearchQuizNode;
        setCurrentNodeId(node.nextNode);
    };

    const handlePromptInput = async () => {
        userInteractionCount.current++;
        const message = inputValue.trim();
        if (!message) return;

        addMessage({ sender: 'user', text: message });
        const lastNode = decisionTree[currentNodeId];
        
        setInputValue('');
        setInputVisible(false);

        if (lastNode.type !== 'PROMPT') return;
        
        if (currentNodeId === 'collect_email') {
            try {
                const { isValid, reason, email: correctedEmail } = await validateEmailWithAI(message);
                
                if (isValid) {
                    const finalEmail = correctedEmail || message;
                    setGameState(prev => ({ ...prev, email: finalEmail }));
                    setCurrentNodeId(lastNode.nextNode);
                } else {
                    let responseText = reason;
                    if (language === 'ms') {
                        responseText = await translateToMalay(responseText);
                    }
                    addMessage({ sender: 'bot', text: responseText });
                    setInputVisible(true);
                }
            } catch (error) {
                console.error("Error during email validation:", error);
                let errorMessage = "I had a little trouble processing that. Could you please try again?";
                 if (language === 'ms') {
                    errorMessage = await translateToMalay(errorMessage);
                }
                addMessage({ sender: 'bot', text: errorMessage });
                setInputVisible(true);
            }
            return;
        }
        
        if (currentNodeId === 'start') {
            setGameState(prev => ({...prev, userName: message}));
        } else if (currentNodeId === 'collect_full_name') {
            setGameState(prev => ({...prev, certificateName: message}));
        } else if (currentNodeId === 'collect_university') {
            setGameState(prev => ({...prev, university: message}));
        } else if (currentNodeId === 'quiz_q6_prompt') {
            setGameState(prev => ({ ...prev, q6Attempts: prev.q6Attempts + 1 }));
        } else if (currentNodeId === 'quiz_q7_prompt') {
            setGameState(prev => ({ ...prev, q7Attempts: prev.q7Attempts + 1 }));
        }

        if (quizOrder.includes(currentNodeId)) {
            setGameState(prev => ({ ...prev, lastQuestionId: currentNodeId }));
        }

        if (lastNode.isDynamic) {
            try {
                let contextPrompt = "";
                const jsonInstruction = `Your primary task is to determine if the user's response is relevant to the question implicit in the instructions. Then, formulate a helpful response based on the context. Return your output as a JSON object with two keys: 'isRelevant' (boolean) and 'responseText' (string).`;

                if (currentNodeId === 'what_else_student_prompt') {
                    contextPrompt = `You are a friendly and encouraging chatbot helping a student understand ESG. The student was just asked "what else do you think you can do as a student?". The student will provide their idea. If the idea is relevant, validate it positively and briefly expand on it. If the idea is irrelevant (e.g., "I like pizza"), your responseText should be a polite message asking the user to provide an idea related to ESG actions.`;
                } else if (currentNodeId === 'degree_major_prompt') {
                    contextPrompt = `You are a friendly and encouraging chatbot helping a student understand ESG. The student has just been asked for their major. If their answer is a plausible academic major, respond positively and briefly explain in one or two sentences how ESG is relevant to that specific field. **Crucially, when you mention the user's major in your response, wrap it in double asterisks like this: **The Major**.** Use markdown for other emphasis as well. If the answer is not a plausible major (e.g. "I don't know" or "blue"), your responseText should be a friendly message asking them to provide their actual major.`;
                } else if (currentNodeId === 'quiz_q6_prompt') {
                    contextPrompt = `You are a thoughtful and inspiring chatbot concluding a quiz about ESG. The student was asked the open-ended question: "How much do you matter in saving our Earth?". Provide a thoughtful and encouraging response. Acknowledge their perspective and then reinforce the idea that individual actions matter. Keep it concise and uplifting. If the answer is irrelevant, your responseText should gently guide them back to answering the question.`;
                } else if (currentNodeId === 'quiz_q7_prompt') {
                    contextPrompt = `You are an encouraging chatbot concluding a quiz about ESG. The student was asked the open-ended question: "What is one action you will take to improve your ESG impact?". The student will provide their commitment. Provide a positive and affirming response. Acknowledge their commitment and reinforce that it's a great step. If the answer is irrelevant, your responseText should gently ask them to state a concrete action they plan to take.`;
                } else if (currentNodeId === 'ask_more_major_prompt') {
                    contextPrompt = `You are a helpful chatbot explaining the connection between a student's major and ESG. The student's major is "${gameState.major}". They have already received a basic explanation and are now asking a follow-up question. Answer their question concisely and clearly, as if you are talking to a student. Keep it simple but understandable. If the user's question is not related to their major or ESG, your responseText should politely guide them back to the topic.`;
                } else if (currentNodeId === 'ask_more_esg_prompt') {
                    contextPrompt = `You are a friendly ESG expert chatbot. A student has finished the main curriculum and has a final question about ESG before taking a quiz. Answer their question clearly and concisely, as if you are talking to a student. Keep it simple but understandable. If the user asks something completely off-topic, your responseText should politely steer them back to asking about ESG.`;
                }

                const systemInstruction = `${contextPrompt} ${jsonInstruction}`;
                const { isRelevant, text: englishText } = await getDynamicResponse(systemInstruction, message);

                let finalResponseText = englishText;
                if (language === 'ms') {
                    finalResponseText = await translateToMalay(englishText);
                }

                if (isRelevant) {
                     if (currentNodeId === 'quiz_q6_prompt' || currentNodeId === 'quiz_q7_prompt') {
                        // These questions no longer award points, but they do count as correct
                        // for the final tally and for maintaining a streak.
                        setGameState(prev => ({
                            ...prev,
                            streak: prev.streak + 1,
                            quizCorrectAnswers: prev.quizCorrectAnswers + 1,
                        }));
                    }

                    if (currentNodeId === 'degree_major_prompt') {
                        setGameState(prev => ({...prev, major: message}));
                    }
                    dynamicResponseTextRef.current = finalResponseText;
                    setCurrentNodeId(lastNode.nextNode);
                } else {
                    addMessage({sender: 'bot', text: finalResponseText});
                    setInputVisible(true);
                }

            } catch (error) {
                console.error("Error processing prompt:", error);
                let errorMessage = "I had a little trouble processing that. Could you please try again?";
                 if (language === 'ms') {
                    errorMessage = await translateToMalay(errorMessage);
                }
                addMessage({ sender: 'bot', text: errorMessage });
                setInputVisible(true);
            }
        } else {
             setCurrentNodeId(lastNode.nextNode);
        }
    };

    const progressPercent = totalProgressSteps > 0 ? (gameState.visitedProgressNodes.size / totalProgressSteps) * 100 : 0;
    const prevProgressPercentRef = useRef(progressPercent);

    // Effect to trigger the milestone popup
    useEffect(() => {
        const oldProgress = prevProgressPercentRef.current;
        const newProgress = progressPercent;
        
        let newText: string | null = null;
        
        // Check for crossing the 20% threshold
        if (newProgress > 20 && oldProgress <= 20) {
            newText = t('progress_bar_slaying_it');
        }
        // Check for crossing the 95% threshold
        else if (newProgress >= 95 && oldProgress < 95) {
            newText = t('progress_bar_almost_there');
        }

        if (newText) {
            setMilestoneText(newText);
        }

        // Update the ref for the next render
        prevProgressPercentRef.current = newProgress;
    }, [progressPercent, t]);

    return (
        <>
            <BackgroundEffects />
            <ToastNotification message={toast} onClear={() => setToast(null)} />
            <ProgressMilestonePopup text={milestoneText} onAnimationEnd={() => setMilestoneText(null)} />

            <div className="relative z-10 flex flex-col h-dvh">
                <Header 
                    score={Math.round(gameState.score)}
                    streak={gameState.streak}
                    theme={theme}
                    onThemeToggle={() => setTheme(t => t === 'light' ? 'dark' : 'light')}
                    language={language}
                    onLanguageChange={setLanguage}
                    t={t}
                    badges={BADGES}
                    unlockedBadges={gameState.unlockedBadges}
                    progress={progressPercent}
                />
                 <BadgeNotification badge={activeBadge} language={language} t={t} />
                 {showCelebration && (
                    <CelebrationModal 
                        score={Math.round(gameState.score)} 
                        onClose={() => setShowCelebration(false)} 
                        onRestart={resetGame}
                        t={t} 
                    />
                 )}
                <main className="flex-1 max-w-3xl mx-auto w-full flex flex-col overflow-hidden">
                    {appPhase === 'avatar_selection' ? (
                        <div className="flex-1 flex flex-col items-center justify-center p-4 animate-fade-in-up">
                            <h2 className="text-3xl font-bold text-center mb-2 text-text-main">{t('avatar_select_title')}</h2>
                            <p className="text-center text-text-dim mb-8">{t('avatar_select_subtitle')}</p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                {Object.keys(avatarIconMap).map(avatarKey => (
                                    <button 
                                        key={avatarKey} 
                                        onClick={() => handleAvatarSelect(avatarKey)}
                                        className="p-2 bg-surface-a rounded-full shadow-lg border border-border-color hover:border-accent hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-accent/50"
                                        aria-label={`Select avatar ${avatarKey.replace('avatar', '')}`}
                                    >
                                        {React.createElement(avatarIconMap[avatarKey], { className: "w-24 h-24" })}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <>
                            <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 custom-scrollbar">
                                {messages.map((msg) => (
                                    <ChatMessage 
                                        key={msg.id} 
                                        message={msg} 
                                        onOptionClick={handleOptionClick} 
                                        onDragDropQuizComplete={handleDragDropQuizComplete} 
                                        onWordSearchQuizComplete={handleWordSearchQuizComplete} 
                                        onWordSearchQuizSkip={handleWordSearchQuizSkip} 
                                        userAvatar={userAvatar} 
                                    />
                                ))}
                            </div>
                            {inputVisible && (
                                <div className="input-area-container p-4">
                                    <div className="input-form-wrapper max-w-3xl mx-auto">
                                        <input
                                            id="user-input"
                                            type="text"
                                            value={inputValue}
                                            onChange={(e) => setInputValue(e.target.value)}
                                            placeholder={t('Type your answer here...')}
                                            className="user-input-field"
                                            onKeyPress={(e) => e.key === 'Enter' && handlePromptInput()}
                                            aria-label={t('Type your answer here...')}
                                        />
                                        <button
                                            onClick={handlePromptInput}
                                            className="send-button"
                                            aria-label="Send message"
                                        >
                                            <SendIcon className="w-6 h-6" />
                                        </button>
                                    </div>
                                </div>
                            )}
                        </>
                    )}
                </main>
            </div>
        </>
    );
};

export default App;

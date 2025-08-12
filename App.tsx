

import React, { useState, useEffect, useRef } from 'react';
import { Header } from './Header';
import { BackgroundEffects } from './BackgroundEffects';
import { BotIcon, SendIcon, Avatar1Icon, Avatar2Icon, Avatar3Icon, Avatar4Icon } from './Icons';
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

const TypingIndicator = () => (
    <div className="flex justify-start animate-slide-in-up">
        <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-[var(--surface-b)] flex items-center justify-center flex-shrink-0 shadow-md border border-[var(--border-color)]">
                <BotIcon className="w-6 h-6 text-[var(--text-dim)]" />
            </div>
            <div className="bot-bubble chat-bubble">
                <div className="flex gap-2 items-center h-6">
                    <div className="w-2.5 h-2.5 bg-gray-400 rounded-full typing-dot"></div>
                    <div className="w-2.5 h-2.5 bg-gray-400 rounded-full typing-dot"></div>
                    <div className="w-2.5 h-2.5 bg-gray-400 rounded-full typing-dot"></div>
                </div>
            </div>
        </div>
    </div>
);

const ChatMessage: React.FC<{
    message: Message;
    onOptionClick: (nextNodeId: NodeId, branchKey: string, buttonText: string, type?: 'share_linkedin' | 'show_certificate' | 'external_link') => void;
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
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-b)] flex items-center justify-center flex-shrink-0 shadow-md border border-[var(--border-color)] p-1 overflow-hidden">
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
                <div className="w-10 h-10 rounded-full bg-[var(--surface-b)] flex items-center justify-center flex-shrink-0 shadow-md border border-[var(--border-color)]">
                     <BotIcon className="w-6 h-6 text-[var(--text-dim)]" />
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
        quizCompleted: false,
        q6Attempts: 0,
        q7Attempts: 0,
        q8Skipped: false,
    };

    const [gameState, setGameState] = useState<GameState>(initialGameState);
    const [messages, setMessages] = useState<Message[]>([]);
    const [currentNodeId, setCurrentNodeId] = useState<NodeId>('start');
    const [isTyping, setIsTyping] = useState(false);
    const [inputVisible, setInputVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [visitedLoopBranches, setVisitedLoopBranches] = useState(new Set<string>());
    const [visitedSecondaryBranches, setVisitedSecondaryBranches] = useState<Record<string, Set<string>>>({});
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

    const scrollToBottom = () => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTo({
                top: chatContainerRef.current.scrollHeight,
                behavior: 'smooth'
            });
        }
    };
    useEffect(scrollToBottom, [messages, isTyping]);
    
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
        setVisitedSecondaryBranches({});
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
                    const oldProgressScore = Math.floor((prev.visitedProgressNodes.size / totalProgressSteps) * 200);
                    const newVisited = new Set(prev.visitedProgressNodes).add(currentNodeId);
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
        
        const typingTimer = setTimeout(async () => {
            let messageText: string;
            const replacements: Record<string, string | number> = {
                userName: gameState.userName,
                score: Math.round(gameState.score),
                quizCorrectAnswers: gameState.quizCorrectAnswers,
                major: gameState.major,
            };

            if (currentNodeId === 'quiz_end' || currentNodeId === 'final_thanks_no_quiz') {
                const totalCo2 = userInteractionCount.current * 2.5;
                const acMinutes = Math.round(totalCo2 / 6);
                const carKm = (totalCo2 / 200).toFixed(2);
                
                replacements.co2 = totalCo2.toFixed(1);
                replacements.acMinutes = acMinutes;
                replacements.carKm = carKm;

                // Keep typing indicator on while we fetch the AI reminder
                setIsTyping(true);
                const aiReminder = await getAIImpactReminder(totalCo2, language);
                replacements.aiReminder = aiReminder;
            }
            
            setIsTyping(false);

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

            if (node.type === 'QUIZ_DRAG_DROP' || node.type === 'QUIZ_WORD_SEARCH') {
                quizData = node;
            } else if (node.type === 'LOOP_QUESTION') {
                const isSecondary = !!node.parentLoop;
                const loopKey = isSecondary ? currentNodeId : 'main_loop';
                const visitedSet = isSecondary ? (visitedSecondaryBranches[loopKey] || new Set()) : visitedLoopBranches;
                const remainingBranches = Object.keys(node.branches).filter(key => !visitedSet.has(key));

                if (remainingBranches.length === 0) {
                    setCurrentNodeId(node.nextNode);
                    return;
                }
                
                if (visitedSet.size > 0) {
                    if (currentNodeId === 'more_importance_esg') {
                        const remainingBranchKey = remainingBranches[0];
                        const key = remainingBranchKey === 'matter_as_student' 
                            ? 'more_importance_esg_revisit_text_matter_as_student' 
                            : 'more_importance_esg_revisit_text_insurance_link';
                        messageText = t(key);
                    } else if (currentNodeId === 'insurance_demo_prompt') {
                        // Special handling for the insurance demo loop if needed
                    } else { 
                        const revisitTextKey = isSecondary ? 'more_importance_esg_revisit_text' : 'main_loop_revisit_text';
                        messageText = t(revisitTextKey, { userName: gameState.userName });
                    }
                }
                
                messageButtons = remainingBranches.map(key => ({
                    ...node.branches[key],
                    text: t(node.branches[key].text),
                    branchKey: key
                }));

            } else if ((node.type === 'QUESTION' || node.type === 'ANSWER') && node.buttons) {
                messageButtons = node.buttons.map(btn => ({ ...btn, text: t(btn.text) }));
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

        }, 500);
        
        setIsTyping(true);

        return () => {
            clearTimeout(typingTimer);
        };

    }, [currentNodeId, gameState.quizCompleted, language, appPhase]);

    const handleAvatarSelect = (avatarId: string) => {
        userInteractionCount.current++;
        setUserAvatar(avatarId);
        setAppPhase('chat');
    };

    const handleOptionClick = async (nextNodeId: NodeId, branchKey: string, buttonText: string, type?: 'share_linkedin' | 'show_certificate' | 'external_link') => {
        userInteractionCount.current++;
        const lastMessage = messages[messages.length-1];

        if (type === 'external_link') {
            window.open(nextNodeId, '_blank', 'noopener,noreferrer');
            return;
        }

        if (type === 'share_linkedin') {
            const shareText = encodeURIComponent(`I just completed the ESG Student Guide by RHB, scoring ${Math.round(gameState.score)} out of 1000 points, and earned a certificate of completion! It's a fantastic interactive way to learn about Environmental, Social, and Governance principles. #ESG #Sustainability #RHBCares #RHBInsurance`);
            const url = `https://www.linkedin.com/feed/?shareActive=true&text=${shareText}`;
            window.open(url, '_blank');
            return;
        }
        
        if (nextNodeId === 'end_curriculum') {
            setShowCelebration(true);
            return;
        }

        if (type === 'show_certificate') {
            addMessage({ sender: 'user', text: buttonText }, lastMessage.id);
            
            setIsTyping(true);
            const submissionSuccessful = await submitToGoogleForm({
                name: gameState.certificateName,
                email: gameState.email,
                university: gameState.university,
                score: Math.round(gameState.score)
            });
            setIsTyping(false);

            if (submissionSuccessful) {
                addMessage({
                    sender: 'bot',
                    text: t('post_certificate_text'),
                    buttons: [
                        { text: t('btn_share_score'), nextNode: '#', type: 'share_linkedin' },
                        { text: t('btn_end_curriculum'), nextNode: 'end_curriculum' },
                        { text: t('btn_start_over'), nextNode: 'start' }
                    ]
                });
            } else {
                addMessage({
                    sender: 'bot',
                    text: t('form_submission_error_text')
                });
            }
            return;
        }


        addMessage({ sender: 'user', text: buttonText }, lastMessage.id);
        
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
                 setVisitedSecondaryBranches(prev => {
                    const newSet = new Set(prev[currentNodeId] || []);
                    newSet.add(branchKey);
                    return {...prev, [currentNodeId]: newSet };
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
            setIsTyping(true);
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
            } finally {
                setIsTyping(false);
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
             setIsTyping(true);
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
            } finally {
                setIsTyping(false);
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
                                <ChatMessage key={msg.id} message={msg} onOptionClick={handleOptionClick} onDragDropQuizComplete={handleDragDropQuizComplete} onWordSearchQuizComplete={handleWordSearchQuizComplete} onWordSearchQuizSkip={handleWordSearchQuizSkip} userAvatar={userAvatar} />
                                ))}
                                {isTyping && <TypingIndicator />}
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

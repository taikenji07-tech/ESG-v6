
export type NodeId = string;
export type Language = 'en' | 'ms';

export interface Button {
    text: string;
    nextNode: NodeId;
    branchKey?: string;
    type?: 'show_certificate' | 'share_linkedin' | 'external_link';
}

export interface Branch {
    text: string;
    nextNode: NodeId;
}

interface BaseNode {
    text: string; // This will now be a translation key
    nextNode?: NodeId;
    isDynamic?: boolean;
    isCorrect?: boolean;
}

export interface QuestionNode extends BaseNode {
    type: 'QUESTION';
    buttons: Button[];
}

export interface AnswerNode extends BaseNode {
    type: 'ANSWER';
    buttons?: Button[];
}

export interface LoopQuestionNode extends BaseNode {
    type: 'LOOP_QUESTION';
    branches: Record<string, Branch>;
    nextNode: NodeId;
    parentLoop?: NodeId;
}

export interface PromptNode extends BaseNode {
    type: 'PROMPT';
    nextNode: NodeId;
}

export interface RedirectNode {
    type: 'REDIRECT';
    nextNode: NodeId;
}

export interface RedirectQuizNode {
    type: 'REDIRECT_QUIZ';
}

// Drag and Drop Quiz Types
export interface DragDropQuizItem {
    id: string;
    textKey: string;
}

export interface DragDropQuizTarget {
    id: string;
    labelKey: string;
    correctItemId: string;
}

export interface DragDropQuizNode extends BaseNode {
    type: 'QUIZ_DRAG_DROP';
    items: DragDropQuizItem[];
    targets: DragDropQuizTarget[];
    nextNode: NodeId;
    incorrectNextNode: NodeId;
}

// Word Search Quiz Types
export interface WordSearchQuizNode extends BaseNode {
    type: 'QUIZ_WORD_SEARCH';
    gridSize: number;
    nextNode: NodeId;
}

export interface WordSearchPoolItem {
    wordKey: string;
    definitionKey: string;
    exampleKey: string;
}

export interface WordDefinition {
    word: string;
    definition: string;
    example: string;
}


export type Node = QuestionNode | AnswerNode | LoopQuestionNode | PromptNode | RedirectNode | RedirectQuizNode | DragDropQuizNode | WordSearchQuizNode;

export type DecisionTree = Record<NodeId, Node>;

export interface Message {
    id: number;
    sender: 'user' | 'bot';
    text: string;
    buttons?: Button[];
    quizData?: DragDropQuizNode | WordSearchQuizNode;
    language?: Language;
}

// Gamification Types
export interface Badge {
    id: 'knowledge' | 'master' | 'flawless';
    nameKey: string;
    descriptionKey: string;
    tooltipKey: string;
    score: number;
    icon: string;
}

export interface GameState {
    score: number;
    streak: number;
    unlockedBadges: Set<string>;
    quizCorrectAnswers: number;
    userName: string;
    certificateName: string;
    email: string;
    university: string;
    major: string;
    lastQuestionId: string;
    visitedProgressNodes: Set<string>;
    visitedSecondaryBranches: Record<string, Set<string>>;
    quizCompleted: boolean;
    q6Attempts: number;
    q7Attempts: number;
    q8Skipped: boolean;
    esgBreakdownCompleted: boolean;
}

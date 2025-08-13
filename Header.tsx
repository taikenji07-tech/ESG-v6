

import React from 'react';
import { SparklesIcon, SunIcon, MoonIcon, StarIcon, ZapIcon } from './Icons';
import { Language, Badge } from './types';
import { LearningProgressBar } from './TopProgressBar';

interface HeaderProps {
    score: number;
    streak: number;
    theme: 'light' | 'dark';
    onThemeToggle: () => void;
    language: Language;
    onLanguageChange: (language: Language) => void;
    t: (key: string) => string;
    badges: Badge[];
    unlockedBadges: Set<string>;
    progress: number;
}

const badgeImageMap: Record<string, string> = {
    knowledge: 'https://cdn-icons-png.flaticon.com/128/10221/10221707.png',
    master: 'https://cdn-icons-png.flaticon.com/128/3176/3176324.png',
    flawless: 'https://cdn-icons-png.flaticon.com/128/17360/17360027.png',
};

export const Header: React.FC<HeaderProps> = ({ score, streak, theme, onThemeToggle, language, onLanguageChange, t, badges, unlockedBadges, progress }) => {
    const logoUrl = theme === 'light' 
        ? 'https://i.imgur.com/Txai8Wa.png' 
        : 'https://i.imgur.com/1CYHtVd.png';

    return (
        <header className="header-bg z-20">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4">
                <div className="flex items-center justify-between gap-4">
                    {/* Left side: Title & Logo */}
                    <div className="flex flex-col">
                        <a href="https://www.maybank.com/" target="_blank" rel="noopener noreferrer" aria-label="Brought to you by Maybank">
                            <img src="https://i.imgur.com/YEr2agc.png" alt="Brought to you by Maybank" className="h-auto w-24" />
                        </a>
                        <a href="https://www.rhbinsurance.com.my/" target="_blank" rel="noopener noreferrer" aria-label="ESG Student Guide by RHB">
                            <img src={logoUrl} alt="ESG Student Guide by RHB" className="mt-2 h-14" />
                        </a>
                    </div>

                    {/* Right side: Toggles */}
                    <div className="flex items-center gap-2">
                         <div className="language-selector">
                            <button
                                onClick={() => onLanguageChange('en')}
                                className={language === 'en' ? 'active' : ''}
                                aria-label={t('toggle_language_to_en')}
                                aria-pressed={language === 'en'}
                            >
                                ENG
                            </button>
                            <button
                                onClick={() => onLanguageChange('ms')}
                                className={language === 'ms' ? 'active' : ''}
                                aria-label={t('toggle_language_to_ms')}
                                aria-pressed={language === 'ms'}
                            >
                                BM
                            </button>
                        </div>
                        <button 
                            onClick={onThemeToggle} 
                            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                            aria-label="Toggle theme"
                        >
                            {theme === 'light' ? <SunIcon className="w-5 h-5 text-text-dim" /> : <MoonIcon className="w-5 h-5 text-text-dim" />}
                        </button>
                    </div>
                </div>

                {/* Learning Progress Bar */}
                <div className="my-4">
                    <LearningProgressBar progress={progress} t={t} />
                </div>

                {/* Bottom part: Stats */}
                <div className="flex items-center justify-between gap-3">
                    <div className="badge-container">
                        {badges.map(badge => {
                            const imageUrl = badgeImageMap[badge.id];
                            const isUnlocked = unlockedBadges.has(badge.id);
                            return (
                                <div key={badge.id} className={`badge-icon ${isUnlocked ? `unlocked unlocked-${badge.id}` : 'grayscale'}`}>
                                    <img src={imageUrl} alt={t(badge.tooltipKey)} className="w-full h-full object-contain" />
                                    <div className="badge-tooltip">{t(badge.tooltipKey)}</div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="score-display px-3 py-1 rounded-full flex items-center gap-1.5 text-xs">
                            <StarIcon className="w-3.5 h-3.5 text-amber-500" />
                            <span className="font-medium">{score}</span>
                        </div>
                        {streak > 0 && (
                            <div className="streak-counter px-3 py-1 rounded-full text-white flex items-center gap-1.5 text-xs">
                                <ZapIcon className="w-3.5 h-3.5" />
                                <span className="font-bold">{streak}</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};


import React from 'react';

interface LearningProgressBarProps {
    progress: number;
    t: (key: string) => string;
}

export const LearningProgressBar: React.FC<LearningProgressBarProps> = ({ progress, t }) => {
    let progressText = '';
    if (progress >= 95) {
        progressText = t('progress_bar_almost_there');
    } else if (progress > 20) {
        progressText = t('progress_bar_slaying_it');
    }

    return (
        <div className="learning-progress-bar-container" aria-label={`${t('learning_progress')}: ${Math.round(progress)}%`}>
            <div className="learning-progress-bar-track">
                <div className="learning-progress-bar-fill" style={{ width: `${progress}%` }}>
                   {progress > 0 && <div className="progress-bar-sparkle">✨</div>}
                </div>
            </div>
            {progressText && <div className="learning-progress-bar-text animate-fade-in-up">{progressText}</div>}
        </div>
    );
};
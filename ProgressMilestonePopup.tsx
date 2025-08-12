
import React, { useState, useEffect } from 'react';

interface ProgressMilestonePopupProps {
    text: string | null;
    onAnimationEnd: () => void;
}

export const ProgressMilestonePopup: React.FC<ProgressMilestonePopupProps> = ({ text, onAnimationEnd }) => {
    const [isVisible, setIsVisible] = useState(false);

    // This effect handles the display and teardown of the popup.
    useEffect(() => {
        let timer: ReturnType<typeof setTimeout>;
        if (text) {
            setIsVisible(true);
            // Hide and call cleanup after the animation duration
            timer = setTimeout(() => {
                setIsVisible(false);
                onAnimationEnd();
            }, 2500); 
        }

        return () => {
            clearTimeout(timer);
        };
    }, [text, onAnimationEnd]);

    if (!isVisible) {
        return null;
    }

    return (
        <div className="progress-milestone-overlay">
            <h2 className="progress-milestone-text">{text}</h2>
        </div>
    );
};

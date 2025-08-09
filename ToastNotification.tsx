
import React, { useState, useEffect } from 'react';

interface ToastNotificationProps {
    message: string | null;
    onClear: () => void;
}

export const ToastNotification: React.FC<ToastNotificationProps> = ({ message, onClear }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (message) {
            setIsVisible(true);
            const timer = setTimeout(() => {
                setIsVisible(false);
                // Allow time for fade-out animation before clearing the message
                setTimeout(onClear, 500); 
            }, 4000); // Show for 4 seconds
            return () => clearTimeout(timer);
        }
    }, [message, onClear]);

    return (
        <div className={`toast-notification-wrapper ${isVisible ? 'visible' : ''}`} role="alert" aria-live="polite">
            <div className="toast-notification">
                {message}
            </div>
        </div>
    );
};

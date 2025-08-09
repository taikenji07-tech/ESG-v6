
import React, { useMemo } from 'react';
import type { Badge, Language } from './types';
import { BookOpenCheckIcon, TargetIcon, TrophyIcon } from './Icons';

interface BadgeNotificationProps {
    badge: Badge | null;
    language: Language;
    t: (key: string, replacements?: Record<string, string | number>) => string;
}

const iconMap: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
    'knowledge': BookOpenCheckIcon,
    'master': TargetIcon,
    'flawless': TrophyIcon,
};

const Confetti: React.FC = () => {
    const particles = useMemo(() => {
        const colors = ['#fdd835', '#ff9800', '#ef5350', '#4caf50', '#2196f3', '#9c27b0'];
        return Array.from({ length: 25 }).map((_, i) => ({
            id: i,
            style: {
                left: `${Math.random() * 100}%`,
                backgroundColor: colors[Math.floor(Math.random() * colors.length)],
                animationDelay: `${Math.random() * 0.5}s`,
            } as React.CSSProperties
        }));
    }, []);

    return (
        <div className="absolute inset-0 pointer-events-none">
            {particles.map(p => <div key={p.id} className="confetti-particle" style={p.style} />)}
        </div>
    );
};

export const BadgeNotification: React.FC<BadgeNotificationProps> = ({ badge, t }) => {
    const isVisible = !!badge;

    const IconComponent = badge ? iconMap[badge.id] || TrophyIcon : TrophyIcon;
    const title = badge ? t(badge.nameKey) : '';

    return (
        <div 
            className={`badge-notification-wrapper fixed top-4 left-1/2 z-50 w-full max-w-sm px-4 ${isVisible ? 'visible' : ''}`}
            role="alert"
            aria-live="assertive"
        >
            <div className="badge-notification relative p-4 rounded-2xl text-white shadow-lg">
                 {isVisible && <Confetti />}
                <div className="relative flex items-center gap-4">
                    <IconComponent className="w-12 h-12 flex-shrink-0 text-white drop-shadow-lg" />
                    <div className="font-bold text-xl leading-tight">{title}</div>
                </div>
            </div>
        </div>
    );
};
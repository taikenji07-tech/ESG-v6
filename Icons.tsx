
import React from 'react';

type IconProps = React.SVGProps<SVGSVGElement>;

export const SparklesIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m12 3-1.9 5.8-5.8 1.9 5.8 1.9L12 18l1.9-5.8 5.8-1.9-5.8-1.9L12 3zM5 3l3.8 3.8M2 14l6-2M19 21l-3.8-3.8M16 2l2 6"/></svg>
);

export const SunIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
);

export const MoonIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
);

export const StarIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" {...props}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
);

export const ZapIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" {...props}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
);

export const BotIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="5" y="7" width="14" height="12" rx="4" />
        <circle cx="9.5" cy="12" r="1.5" fill="currentColor" strokeWidth="0" />
        <circle cx="14.5" cy="12" r="1.5" fill="currentColor" strokeWidth="0" />
        <path d="M12 7V4" />
        <circle cx="12" cy="3" r="1" fill="currentColor" strokeWidth="0" />
        <path d="M9.5 15.5a3 3 0 0 0 5 0" />
    </svg>
);


export const SendIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m3 3 3 9-3 9 19-9Z"/>
    <path d="m6 12h16"/>
  </svg>
);

export const UserIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
);

export const XIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
);

// User Avatars (Cute Kawaii Style)
export const Avatar1Icon: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="50" cy="50" r="50" fill="#ffc8dd"/>
    <circle cx="35" cy="45" r="5" fill="#2c2c2c"/>
    <circle cx="65" cy="45" r="5" fill="#2c2c2c"/>
    <path d="M40 65C40 60 45 60 50 60C55 60 60 60 60 65" stroke="#2c2c2c" strokeWidth="4" strokeLinecap="round"/>
    <ellipse cx="28" cy="55" rx="8" ry="5" fill="#ffafcc" transform="rotate(-15 28 55)"/>
    <ellipse cx="72" cy="55" rx="8" ry="5" fill="#ffafcc" transform="rotate(15 72 55)"/>
  </svg>
);

export const Avatar2Icon: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="50" cy="50" r="50" fill="#d0eaff"/>
    <path d="M30 42C30 39 33 39 35 39C37 39 40 39 40 42" stroke="#2c2c2c" strokeWidth="4" strokeLinecap="round"/>
    <path d="M60 42C60 39 63 39 65 39C67 39 70 39 70 42" stroke="#2c2c2c" strokeWidth="4" strokeLinecap="round"/>
    <path d="M45 60H55" stroke="#2c2c2c" strokeWidth="4" strokeLinecap="round"/>
    <ellipse cx="28" cy="55" rx="8" ry="5" fill="#bde0fe" transform="rotate(-15 28 55)"/>
    <ellipse cx="72" cy="55" rx="8" ry="5" fill="#bde0fe" transform="rotate(15 72 55)"/>
  </svg>
);

export const Avatar3Icon: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="50" cy="50" r="50" fill="#cdffcd"/>
    <circle cx="35" cy="45" r="3" fill="#2c2c2c"/>
    <circle cx="65" cy="45" r="3" fill="#2c2c2c"/>
    <path d="M40 60C45 68 55 68 60 60" stroke="#2c2c2c" strokeWidth="4" strokeLinecap="round"/>
    <ellipse cx="28" cy="55" rx="8" ry="5" fill="#aaffaa" transform="rotate(-15 28 55)"/>
    <ellipse cx="72" cy="55" rx="8" ry="5" fill="#aaffaa" transform="rotate(15 72 55)"/>
    <path d="M48 35L52 35" stroke="#2c2c2c" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

export const Avatar4Icon: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="50" cy="50" r="50" fill="#fff4d6"/>
    <path d="M32 50C32 47 34 45 37 45C40 45 42 47 42 50" fill="#2c2c2c"/>
    <path d="M58 50C58 47 60 45 63 45C66 45 68 47 68 50" fill="#2c2c2c"/>
    <path d="M45 65C50 62 50 62 55 65" stroke="#2c2c2c" strokeWidth="4" strokeLinecap="round"/>
    <ellipse cx="28" cy="60" rx="8" ry="5" fill="#ffe8b0" transform="rotate(-15 28 60)"/>
    <ellipse cx="72" cy="60" rx="8" ry="5" fill="#ffe8b0" transform="rotate(15 72 60)"/>
  </svg>
);

// Milestone Badge & Celebration Icons
export const BookOpenCheckIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M8 3H2v15h7c1.7 0 3 1.3 3 3V7c0-2.2-1.8-4-4-4Z"/>
        <path d="m16 12 2 2 4-4"/>
        <path d="M16 3h6v15h-7c-1.7 0-3 1.3-3 3V7c0-2.2 1.8-4 4-4Z"/>
    </svg>
);

export const TargetIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="12" r="10"/>
        <circle cx="12" cy="12" r="6"/>
        <circle cx="12" cy="12" r="2"/>
    </svg>
);

export const TrophyIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
        <path d="M4 22h16"/>
        <path d="M10 14.66V22"/>
        <path d="M14 14.66V22"/>
        <path d="M8 2h8v12.66a1 1 0 0 1-.5.86l-3 1.8a1 1 0 0 1-1 0l-3-1.8a1 1 0 0 1-.5-.86V2Z"/>
    </svg>
);

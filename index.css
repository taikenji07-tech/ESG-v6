

/* ------------------------------ */
/*      Blue UI Design System     */
/* ------------------------------ */

:root {
  --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  
  /* Light Theme - Blueish & Friendly */
  --bg-gradient-start: #e3f2fd; /* Light Blue */
  --bg-gradient-end: #bbdefb;   /* Lighter Blue */
  --surface-a: rgba(255, 255, 255, 0.75);
  --surface-b: rgba(255, 255, 255, 0.95);
  --text-main: #0d47a1; /* Deep Navy Blue */
  --text-dim: #42a5f5;  /* Medium Blue */
  --border-color: rgba(66, 165, 245, 0.15);
  --accent: #1976d2;   /* Primary Blue */
  --accent-fg: #ffffff;
  --accent-secondary: #64b5f6; /* Light Blue */
  --header-bg: rgba(255, 255, 255, 0.6);
  --progress-bg: rgba(66, 165, 245, 0.15);
  --progress-fill: linear-gradient(90deg, #84fab0 0%, #8fd3f4 100%); /* New Gradient */
  --shadow-color: rgba(25, 118, 210, 0.1);
  --streak-bg: linear-gradient(135deg, #1976d2, #42a5f5);
}

[data-theme="dark"] {
  --bg-gradient-start: #0d1b2a; /* Midnight Blue */
  --bg-gradient-end: #1b263b;   /* Darker Navy */
  --surface-a: rgba(27, 38, 59, 0.7);
  --surface-b: rgba(27, 38, 59, 0.9);
  --text-main: #e3f2fd; /* Lightest Blue */
  --text-dim: #90caf9;  /* Soft Blue */
  --border-color: rgba(144, 202, 249, 0.15);
  --accent: #64b5f6;   /* Bright Blue */
  --accent-fg: #0d1b2a;
  --accent-secondary: #42a5f5; /* Medium Blue */
  --header-bg: rgba(13, 27, 42, 0.7);
  --progress-bg: rgba(144, 202, 249, 0.1);
  --progress-fill: linear-gradient(90deg, #43e97b 0%, #38f9d7 100%); /* New Gradient */
  --shadow-color: rgba(0, 0, 0, 0.25);
  --streak-bg: linear-gradient(135deg, #64b5f6, #42a5f5);
}

/* ------------------------------ */
/*           Base Styles          */
/* ------------------------------ */

body {
  font-family: var(--font-sans);
  color: var(--text-main);
  transition: background 0.5s ease;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.animated-bg {
  background: linear-gradient(45deg, var(--bg-gradient-start), var(--bg-gradient-end));
  background-size: 200% 200%;
  animation: gradientShift 20s ease infinite;
}

@keyframes gradientShift { 
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
}

/* Custom Scrollbar */
.custom-scrollbar::-webkit-scrollbar { width: 8px; }
.custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
.custom-scrollbar::-webkit-scrollbar-thumb { background: color-mix(in srgb, var(--accent-secondary) 50%, transparent); border-radius: 4px; }
[data-theme="dark"] .custom-scrollbar::-webkit-scrollbar-thumb { background: color-mix(in srgb, var(--accent-secondary) 50%, transparent); }

/* Animations */
.animate-slide-in-up { animation: slideInUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1); }
@keyframes slideInUp {
  from { opacity: 0; transform: translateY(30px) scale(0.9); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}

.animate-fade-in-up { animation: fadeInUp 0.5s 0.2s cubic-bezier(0.25, 1, 0.5, 1) forwards; opacity: 0; }
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.typing-dot { animation: typing 1.5s infinite cubic-bezier(0.34, 1.56, 0.64, 1); }
.typing-dot:nth-child(2) { animation-delay: 0.25s; }
.typing-dot:nth-child(3) { animation-delay: 0.5s; }
@keyframes typing {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}


/* ------------------------------ */
/*       Component Styling        */
/* ------------------------------ */

/* Header */
.header-bg {
  background: var(--header-bg);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border-color);
  transition: background 0.3s ease, border-color 0.3s ease;
  position: sticky;
  top: 0; /* Stick to the top of the viewport */
}

.score-display {
  background-color: var(--surface-a);
  border: 1px solid var(--border-color);
  color: var(--text-dim);
  transition: all 0.3s ease;
}
.score-display span { color: var(--text-main); font-weight: 700; }

.streak-counter {
  background: var(--streak-bg);
  animation: streakPulse 2s ease-in-out infinite;
}
@keyframes streakPulse { 
  0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 color-mix(in srgb, var(--accent) 30%, transparent); } 
  50% { transform: scale(1.08); box-shadow: 0 0 10px 5px color-mix(in srgb, var(--accent) 25%, transparent); } 
}

/* Language Selector */
.language-selector {
  display: flex;
  padding: 4px;
  border-radius: 99px;
  background-color: var(--surface-a);
  border: 1px solid var(--border-color);
}
.language-selector button {
  padding: 4px 14px;
  border: none;
  background-color: transparent;
  border-radius: 99px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  color: var(--text-dim);
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.language-selector button.active {
  background-color: var(--accent);
  color: var(--accent-fg);
  box-shadow: 0 2px 8px color-mix(in srgb, var(--accent) 30%, transparent);
  transform: scale(1.05);
}


/* Chat Bubbles */
.chat-bubble {
  padding: 14px 22px;
  border-radius: 28px;
  max-width: 90%;
  box-shadow: 0 5px 15px var(--shadow-color);
  transition: all 0.3s ease;
  position: relative;
  font-weight: 500;
  line-height: 1.5;
}

.bot-bubble {
  background: var(--surface-b);
  color: var(--text-main);
  border-bottom-left-radius: 8px;
}

.user-bubble {
  background: var(--accent);
  color: var(--accent-fg);
  border-bottom-right-radius: 8px;
}

/* Message Buttons */
.message-button {
  display: block;
  width: 100%;
  text-align: left;
  padding: 12px 18px;
  border-radius: 16px;
  background-color: var(--surface-a);
  border: 1px solid var(--border-color);
  color: var(--accent);
  font-weight: 600;
  transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.message-button:hover {
  transform: translateY(-3px) scale(1.02);
  background-color: var(--surface-b);
  box-shadow: 0 6px 16px var(--shadow-color);
  filter: brightness(1.05);
}
.message-button:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
}

/* Input Area */
.input-area-container {
  background-color: var(--surface-a);
  backdrop-filter: blur(12px);
  border-top: 1px solid var(--border-color);
}

.input-form-wrapper {
  display: flex;
  gap: 12px;
  padding: 10px;
  border-radius: 28px;
  background-color: var(--surface-b);
  border: 1px solid var(--border-color);
  box-shadow: 0 4px 12px var(--shadow-color);
  transition: all 0.3s ease;
}

.input-form-wrapper:focus-within {
  border-color: var(--accent);
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--accent) 20%, transparent);
}

.user-input-field {
  flex-grow: 1;
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0 16px;
  font-size: 16px;
  font-weight: 500;
  color: var(--text-main);
}
.user-input-field::placeholder {
  color: var(--text-dim);
  opacity: 0.8;
}

.send-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--accent);
  color: var(--accent-fg);
  border: none;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
  flex-shrink: 0;
}
.send-button:hover {
  transform: scale(1.15);
  filter: brightness(1.1);
}
.send-button:active {
  transform: scale(1.08);
  filter: brightness(1.0);
}

/* Badge Notification */
.badge-notification-wrapper {
    transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.5s ease;
    transform: translate(-50%, -150%);
    opacity: 0;
}
.badge-notification-wrapper.visible {
    transform: translate(-50%, 0);
    opacity: 1;
}
.badge-notification {
    background: linear-gradient(145deg, var(--accent), var(--accent-secondary));
    box-shadow: 0 10px 30px -10px var(--shadow-color);
    border: 2px solid rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(10px);
    overflow: hidden;
}

/* Toast Notification */
.toast-notification-wrapper {
    position: fixed;
    top: 28px; /* Below progress bar and header */
    left: 50%;
    transform: translate(-50%, -150%);
    opacity: 0;
    z-index: 50;
    transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s ease;
    width: auto;
    max-width: 90%;
}
.toast-notification-wrapper.visible {
    transform: translate(-50%, 0);
    opacity: 1;
}
.toast-notification {
    background: var(--surface-b);
    color: var(--text-main);
    padding: 12px 24px;
    border-radius: 99px;
    font-weight: 600;
    font-size: 14px;
    box-shadow: 0 8px 25px var(--shadow-color);
    border: 1px solid var(--border-color);
}


/* Confetti for Badge */
.confetti-particle {
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    animation: confetti-fall 1.5s ease-out forwards;
    opacity: 0;
}
@keyframes confetti-fall {
    0% { transform: translateY(-100%) rotate(0deg); opacity: 1; }
    100% { transform: translateY(150px) rotate(360deg); opacity: 0; }
}


/* Milestone Badges in Header */
.badge-container {
  background-color: var(--surface-a);
  border: 1px solid var(--border-color);
  padding: 4px 6px;
  border-radius: 99px;
  display: flex;
  gap: 4px;
}
.badge-icon {
  width: 28px;
  height: 28px;
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  cursor: help; /* Indicates the tooltip */
  position: relative;
}
.badge-icon.grayscale {
  filter: grayscale(1) brightness(1.1);
  opacity: 0.6;
}
@keyframes badge-pop-in {
  0% { transform: scale(0.5); opacity: 0; }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); opacity: 1; filter: none; }
}
@keyframes badge-glow {
  0%, 100% { filter: drop-shadow(0 0 1px var(--glow-color)); }
  50% { filter: drop-shadow(0 0 6px var(--glow-color)); }
}
.badge-icon.unlocked {
  animation: badge-pop-in 0.6s forwards, badge-glow 2s ease-in-out infinite;
  animation-delay: 0s, 0.6s;
}
.badge-icon.unlocked-knowledge { --glow-color: #fdd835; }
.badge-icon.unlocked-master { --glow-color: #ef5350; }
.badge-icon.unlocked-flawless { --glow-color: #FFD700; } /* Gold for Trophy */
.badge-tooltip {
    visibility: hidden;
    opacity: 0;
    width: 200px;
    background-color: var(--surface-b);
    color: var(--text-main);
    text-align: center;
    border-radius: 8px;
    padding: 8px 12px;
    position: absolute;
    z-index: 1;
    bottom: 130%;
    left: 50%;
    margin-left: -100px;
    transition: opacity 0.3s;
    font-size: 13px;
    font-weight: 600;
    box-shadow: 0 4px 12px var(--shadow-color);
    border: 1px solid var(--border-color);
}
.badge-icon:hover .badge-tooltip {
    visibility: visible;
    opacity: 1;
}

/* Drag and Drop Quiz */
.dd-item-source {
  padding: 16px;
  background-color: var(--surface-a);
  border-radius: 24px;
  min-height: 6rem;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-content: center;
  justify-content: center;
  border: 1px solid var(--border-color);
}
.dd-item {
  cursor: grab;
  transition: all 0.2s ease;
  background-color: var(--surface-b);
  color: var(--text-main);
  border: 1px solid var(--border-color);
  box-shadow: 0 3px 6px var(--shadow-color);
  touch-action: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  padding: 0;
  border-radius: 50%;
  font-size: 20px;
  font-weight: 700;
}
.dd-item:active {
  cursor: grabbing;
}

.dd-item.dragging {
  opacity: 0.5;
  transform: scale(1.05);
  box-shadow: 0 8px 20px var(--shadow-color);
}

.dd-target {
  padding: 16px;
  border-radius: 24px;
  border: 2px dashed var(--border-color);
  min-height: 8rem;
  display: flex;
  flex-direction: column;
  transition: all 0.2s ease;
}
.dd-target-E { --dd-color: #4dd0e1; } /* Light Teal */
.dd-target-S { --dd-color: #64b5f6; } /* Light Blue */
.dd-target-G { --dd-color: #7986cb; } /* Indigo */
.dd-target.drag-over {
  border-color: var(--dd-color);
  background-color: color-mix(in srgb, var(--dd-color) 20%, transparent);
}
.dd-target-label {
  font-size: 15px;
  font-weight: 500;
  text-align: left;
  line-height: 1.4;
  margin-bottom: 12px;
  color: var(--text-main);
  padding: 0 4px;
}
.dd-target .dd-item {
  border-color: var(--dd-color);
  background-color: color-mix(in srgb, var(--dd-color) 30%, var(--surface-b));
}
.dd-submit-button {
  padding: 14px 28px;
  border-radius: 99px;
  font-weight: bold;
  color: var(--accent-fg);
  background: var(--accent);
  transition: all 0.2s ease;
  border: none;
}
.dd-submit-button:hover {
  transform: translateY(-3px) scale(1.03);
  filter: brightness(1.1);
  box-shadow: 0 6px 16px var(--shadow-color);
}

/* Certificate Modal */
.certificate-button {
  padding: 12px 28px;
  border-radius: 99px;
  font-weight: 600;
  color: white;
  transition: all 0.2s ease;
  border: none;
}
.certificate-button:hover {
    transform: translateY(-2px);
    filter: brightness(1.1);
}
.cert-print { background-color: #1976d2; }
.cert-print:hover { background-color: #2196f3; }
.cert-close { background-color: #64b5f6; }
.cert-close:hover { background-color: #90caf9; }

/* Celebration */
.celebration-modal {
  animation: zoomIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.celebration-title-glow {
  color: var(--text-main);
  text-shadow: 0 0 8px color-mix(in srgb, var(--accent) 30%, transparent), 0 0 20px color-mix(in srgb, var(--accent) 20%, transparent);
}
[data-theme="dark"] .celebration-title-glow {
  text-shadow: 0 0 8px color-mix(in srgb, var(--accent) 70%, transparent), 0 0 20px color-mix(in srgb, var(--accent) 50%, transparent);
}

@keyframes zoomIn {
  from { opacity: 0; transform: scale(0.8); }
  to { opacity: 1; transform: scale(1); }
}

/* Print Styles */
@media print {
  body > *:not(.certificate-print-area) { display: none; }
  .certificate-print-area, .certificate-print-area * { visibility: visible; }
  .certificate-print-area { position: absolute; left: 0; top: 0; width: 100%; height: 100%; margin: 0; padding: 0; }
}

/* Word Search Quiz */
.ws-grid {
  display: grid;
  gap: 4px;
  background-color: var(--surface-a);
  padding: 12px;
  border-radius: 20px;
  border: 1px solid var(--border-color);
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10+ */
  user-select: none; /* Standard syntax */
  touch-action: none;
}

.ws-cell {
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: clamp(0.8rem, 2.5vw, 1.1rem);
  border-radius: 8px;
  background-color: var(--surface-b);
  color: var(--text-dim);
  transition: all 0.15s ease-out;
  cursor: pointer;
  border: 2px solid transparent;
}

.ws-cell.selected {
  background-color: var(--accent);
  color: var(--accent-fg);
  transform: scale(1.1);
  box-shadow: 0 4px 10px color-mix(in srgb, var(--accent) 30%, transparent);
}

.ws-cell.found {
  background-color: var(--accent-secondary);
  color: var(--accent-fg);
}

.ws-word-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 16px;
  justify-content: center;
  padding: 12px;
}

.ws-word {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-dim);
  padding: 4px 12px;
  background-color: var(--surface-a);
  border-radius: 99px;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

.ws-word.found {
  text-decoration: line-through;
  opacity: 0.7;
  color: var(--text-main);
  background-color: color-mix(in srgb, var(--accent-secondary) 25%, transparent);
  border-color: color-mix(in srgb, var(--accent-secondary) 50%, transparent);
}

.ws-submit-button {
  padding: 14px 28px;
  border-radius: 99px;
  font-weight: bold;
  color: var(--accent-fg);
  background: var(--accent);
  transition: all 0.2s ease;
  border: none;
  cursor: pointer;
}
.ws-submit-button:hover {
  transform: translateY(-3px) scale(1.03);
  filter: brightness(1.1);
  box-shadow: 0 6px 16px var(--shadow-color);
}

.ws-skip-button {
  padding: 14px 28px;
  border-radius: 99px;
  font-weight: bold;
  color: var(--text-dim);
  background: transparent;
  transition: all 0.2s ease;
  border: 2px solid var(--border-color);
  cursor: pointer;
}
.ws-skip-button:hover {
    background-color: var(--surface-a);
    border-color: var(--text-dim);
}

/* Word Definition Popup */
.word-definition-popup {
    position: fixed;
    bottom: 20px;
    left: 20px;
    right: 20px;
    z-index: 50;
    max-width: 500px;
    margin: auto;
    background: var(--surface-b);
    border-radius: 20px;
    padding: 20px;
    box-shadow: 0 10px 30px var(--shadow-color);
    border: 1px solid var(--border-color);
    animation: slideInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    backdrop-filter: blur(10px);
}
[data-theme="dark"] .word-definition-popup {
    background: color-mix(in srgb, var(--surface-b) 90%, transparent);
}
.word-definition-popup-word {
    font-size: 20px;
    font-weight: 700;
    color: var(--accent);
    margin-bottom: 8px;
}
.word-definition-popup-def {
    font-size: 15px;
    color: var(--text-main);
    margin-bottom: 12px;
}
.word-definition-popup-ex {
    font-size: 14px;
    color: var(--text-dim);
    font-style: italic;
    border-left: 3px solid var(--accent-secondary);
    padding-left: 12px;
}
.word-definition-popup-close {
    position: absolute;
    top: 12px;
    right: 12px;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: var(--surface-a);
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-dim);
    transition: all 0.2s;
}
.word-definition-popup-close:hover {
    background: var(--border-color);
    transform: scale(1.1);
}

/* Learning Progress Bar (in Header) */
.learning-progress-bar-container {
    position: relative; /* Sits within the header flow */
    width: 100%;
    height: 12px;
    pointer-events: none;
}
.learning-progress-bar-track {
    width: 100%;
    height: 100%;
    background: var(--progress-bg);
    border-radius: 99px;
    overflow: hidden;
}
.learning-progress-bar-fill {
    height: 100%;
    background: var(--progress-fill);
    transition: width 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
    position: relative;
    box-shadow: 0 0 10px 2px color-mix(in srgb, var(--accent) 20%, transparent);
}
.progress-bar-sparkle {
    position: absolute;
    right: -8px;
    top: 50%;
    transform: translateY(-50%) scale(1.2);
    animation: sparkle-anim 1.5s infinite;
    opacity: 0;
    font-size: 16px;
    filter: drop-shadow(0 0 4px #fff);
}
.learning-progress-bar-fill:not([style*="width: 0%"]) .progress-bar-sparkle {
    opacity: 1;
}
@keyframes sparkle-anim {
    0%, 100% { transform: translateY(-50%) scale(1.2); opacity: 1; }
    50% { transform: translateY(-50%) scale(1.5); opacity: 0.7; }
}
.learning-progress-bar-text {
    position: absolute;
    top: 16px; /* Positioned below the 12px bar */
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--surface-b);
    color: var(--text-main);
    padding: 4px 12px;
    border-radius: 99px;
    font-size: 12px;
    font-weight: bold;
    box-shadow: 0 3px 8px var(--shadow-color);
    white-space: nowrap;
}

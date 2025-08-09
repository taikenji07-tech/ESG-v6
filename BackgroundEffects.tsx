import React from 'react';

// A simple, elegant background effect component to add some life to the app.
// It uses CSS variables from the main theme but provides fallbacks.
export const BackgroundEffects: React.FC = () => {
    return (
        <>
            <style>
                {`
                .background-effects-container {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                    z-index: 0;
                    background: var(--surface-a, #f8f9fa);
                }
                
                @keyframes animate-bg-gradient {
                  0% { transform: translate(-50%, -50%) rotate(0deg); }
                  100% { transform: translate(-50%, -50%) rotate(360deg); }
                }

                .animated-gradient {
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  width: 150vw;
                  height: 150vw;
                  max-width: 1200px;
                  max-height: 1200px;
                  transform-origin: center center;
                  background: radial-gradient(circle, var(--accent-light, #c5dfff) 0%, transparent 50%);
                  opacity: 0.25;
                  animation: animate-bg-gradient 60s linear infinite;
                }

                [data-theme='dark'] .animated-gradient {
                   opacity: 0.15;
                   background: radial-gradient(circle, var(--accent-dark, #3a4a8e) 0%, transparent 50%);
                }
                `}
            </style>
            <div className="background-effects-container">
                <div className="animated-gradient"></div>
            </div>
        </>
    );
};

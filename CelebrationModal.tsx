
import React from 'react';
import { TrophyIcon } from './Icons';

interface CelebrationModalProps {
  score: number;
  onClose: () => void;
  onRestart: () => void;
  t: (key: string, replacements?: Record<string, string | number>) => string;
}

export const CelebrationModal: React.FC<CelebrationModalProps> = ({ score, onClose, onRestart, t }) => {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 backdrop-blur-sm p-4">
      <div className="celebration-modal relative w-full max-w-md bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl shadow-2xl text-center p-8 overflow-hidden border border-white/10">
        <div className="relative z-10">
          <TrophyIcon className="w-20 h-20 text-yellow-400 mx-auto mb-4 drop-shadow-lg" />
          <h2 className="text-3xl font-bold text-white mb-2 celebration-title-glow">{t('celebration_title')}</h2>
          <p className="text-slate-300 mb-6">{t('celebration_subtitle')}</p>
          <div className="mb-8">
            <div className="text-lg font-medium text-slate-300">{t('celebration_final_score')}</div>
            <div className="text-6xl font-bold text-white">{score}</div>
          </div>
          <div className="flex flex-col gap-3">
             <button
              onClick={onRestart}
              className="w-full py-3 px-6 rounded-full font-bold text-accent-fg bg-accent hover:brightness-110 transition-transform hover:scale-105"
            >
              {t('btn_start_over')}
            </button>
            <button
              onClick={onClose}
              className="w-full py-3 px-6 rounded-full font-semibold text-slate-200 bg-white/10 hover:bg-white/20 transition"
            >
              {t('btn_close')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

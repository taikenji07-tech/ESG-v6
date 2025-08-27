import React from 'react';

interface CertificateProps {
  name: string;
  date: string;
  onClose: () => void;
}

const certificateImageUrl = 'https://storage.googleapis.com/aistudio-hosting/workspace-assets/11d1797c-be0b-4171-8b4e-4f7f6da51d5c/versions/default/files/Screely-1721535940984.png';

export const Certificate: React.FC<CertificateProps> = ({ name, date, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="relative w-full max-w-5xl p-4">
        <div 
          className="certificate-container"
          style={{
            position: 'relative',
            width: '100%',
            paddingTop: '70.68%', // Aspect ratio 1169 / 1654
            backgroundImage: `url(${certificateImageUrl})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            fontFamily: "'Montserrat', sans-serif",
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '32.5%',
              left: '9%',
              width: '50%',
              fontSize: 'clamp(1rem, 3.5vw, 2.5rem)',
              fontWeight: 700,
              color: '#0D274D',
              textTransform: 'uppercase',
            }}
          >
            {name}
          </div>
          <div
            style={{
              position: 'absolute',
              top: '44.8%',
              left: '21.5%',
              fontSize: 'clamp(0.6rem, 1.8vw, 1.2rem)',
              fontWeight: 400,
              color: '#333',
            }}
          >
            {date}
          </div>
        </div>
        <div className="text-center mt-4 flex justify-center gap-4">
          <button
            onClick={onClose}
            className="certificate-button cert-close"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

'use client';

import { useState, useEffect } from 'react';

export default function AgeVerification() {
  const [isOpen, setIsOpen] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    const isVerified = localStorage.getItem('age_verified');
    if (!isVerified) {
      setIsOpen(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('age_verified', 'true');
    setIsOpen(false);
  };

  const handleDecline = () => {
    setShowWarning(true);
    setTimeout(() => {
      window.location.href = 'https://www.google.com';
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 backdrop-blur-md animate-fade-in">
      <div className="max-w-lg w-full mx-4 p-8 md:p-10 bg-slate-dark border border-gold-muted/30 rounded-lg relative">
        {/* Anchor icon */}
        <div className="absolute top-4 right-4 opacity-10">
          <svg className="w-16 h-16 text-gold" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm1 8.05V18l3 2h-8l3-2V10.05A7 7 0 0 0 5 17h2a5 5 0 0 1 10 0h2a7 7 0 0 0-6-6.95z"/>
          </svg>
        </div>

        <div className="text-center relative z-10">
          {/* Title */}
          <div className="mb-6">
            <h2 className="text-3xl font-serif text-gold mb-3">
              Verification d&apos;age
            </h2>
            <div className="w-16 h-px bg-gold-muted mx-auto"></div>
          </div>

          {/* Message */}
          <div className="mb-8 space-y-4">
            <p className="text-cream leading-relaxed">
              Ce site propose la vente d&apos;alcool.
              Vous devez avoir l&apos;age legal pour continuer.
            </p>
            <p className="text-lg font-serif text-gold">
              Avez-vous <span className="text-2xl font-bold">18 ans</span> ou plus ?
            </p>
          </div>

          {/* Warning */}
          {showWarning && (
            <div className="mb-6 bg-crimson/20 border border-crimson rounded-lg p-4">
              <p className="text-crimson-light font-semibold text-sm">
                Acces refuse. Redirection en cours...
              </p>
            </div>
          )}

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={handleAccept}
              disabled={showWarning}
              className="px-8 py-3 bg-gold text-ink font-semibold rounded-lg hover:bg-gold-light transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Oui, j&apos;ai 18 ans ou plus
            </button>
            <button
              onClick={handleDecline}
              disabled={showWarning}
              className="px-8 py-3 bg-transparent border border-cream-muted/30 text-cream rounded-lg hover:border-cream-muted transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Non, je suis mineur
            </button>
          </div>

          {/* Legal */}
          <p className="mt-8 text-xs text-cream-muted/60">
            L&apos;abus d&apos;alcool est dangereux pour la sante. A consommer avec moderation.
          </p>
        </div>
      </div>
    </div>
  );
}

'use client';

import { useState, useEffect } from 'react';

export default function AgeVerification() {
  const [isOpen, setIsOpen] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà confirmé son âge
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-pirate-black/95 backdrop-blur-md animate-fade-in">
      {/* Carte modal parchemin */}
      <div className="card-pirate max-w-2xl w-full mx-4 p-8 md:p-12 relative overflow-hidden">
        {/* Ancre décorative */}
        <div className="absolute top-4 right-4 opacity-20">
          <svg className="w-24 h-24 text-pirate-wood" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 8c-1.1 0-2 .9-2 2v8l-3 2a2 2 0 1 0 0 4h10a2 2 0 1 0 0-4l-3-2v-8c0-1.1-.9-2-2-2zM5 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm14 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
          </svg>
        </div>

        {/* Contenu */}
        <div className="text-center relative z-10">
          {/* Titre avec crâne */}
          <div className="mb-6">
            <div className="text-6xl mb-4">☠️</div>
            <h2 className="text-4xl font-bold text-pirate-brown mb-2 font-['Pirata_One']">
              Halte Moussaillon !
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-pirate-gold to-transparent mx-auto"></div>
          </div>

          {/* Message principal */}
          <div className="mb-8 space-y-4">
            <p className="text-xl text-pirate-wood leading-relaxed">
              Avant d'embarquer dans la cale du <strong className="text-rum-amber">Capitaine Blackbeard</strong>,
              nous devons vérifier que vous avez l'âge légal pour consommer de l'alcool.
            </p>
            <div className="bg-parchment-dark/50 border-2 border-pirate-wood/30 rounded-lg p-4">
              <p className="text-lg font-semibold text-pirate-brown">
                Avez-vous <span className="text-3xl font-bold text-blood-red">18 ans</span> ou plus ?
              </p>
            </div>
          </div>

          {/* Warning si refusé */}
          {showWarning && (
            <div className="mb-6 bg-blood-red/20 border-2 border-blood-red rounded-lg p-4 animate-pulse">
              <p className="text-blood-red font-bold">
                ⚠️ Accès refusé. Redirection en cours...
              </p>
            </div>
          )}

          {/* Boutons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleAccept}
              disabled={showWarning}
              className="btn-pirate px-10 py-4 rounded-xl text-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              ⚓ Oui, j'ai 18 ans ou plus
            </button>
            <button
              onClick={handleDecline}
              disabled={showWarning}
              className="btn-pirate-secondary px-10 py-4 rounded-xl text-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              ✕ Non, je suis trop jeune
            </button>
          </div>

          {/* Mention légale */}
          <p className="mt-8 text-xs text-pirate-wood/60 italic">
            L'abus d'alcool est dangereux pour la santé. À consommer avec modération.
          </p>
        </div>

        {/* Texture corde décorative */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-pirate-wood via-pirate-gold to-pirate-wood opacity-30"></div>
      </div>
    </div>
  );
}
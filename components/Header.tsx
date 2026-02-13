'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';

export default function Header() {
  const { totalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-pirate-brown/95 text-white sticky top-0 z-40 shadow-2xl backdrop-blur-sm border-b-4 border-pirate-gold">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo avec ancre */}
          <Link 
            href="/" 
            className="text-2xl font-bold hover:text-pirate-gold transition-colors flex items-center gap-3 group"
          >
            <svg 
              className="w-8 h-8 group-hover:rotate-12 transition-transform duration-300" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M12 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 8c-1.1 0-2 .9-2 2v8l-3 2a2 2 0 1 0 0 4h10a2 2 0 1 0 0-4l-3-2v-8c0-1.1-.9-2-2-2zM5 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm14 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
            </svg>
            <span className="font-['Pirata_One'] tracking-wider">
              🏴‍☠️ Blackbeard
            </span>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex space-x-6 items-center">
            <Link 
              href="/" 
              className="hover:text-pirate-gold transition-colors font-semibold relative group"
            >
              Accueil
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pirate-gold group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="/boutique" 
              className="hover:text-pirate-gold transition-colors font-semibold relative group"
            >
              Boutique
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pirate-gold group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="/a-propos" 
              className="hover:text-pirate-gold transition-colors font-semibold relative group"
            >
              À propos
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pirate-gold group-hover:w-full transition-all duration-300"></span>
            </Link>

            {/* Panier avec badge */}
            <Link
              href="/panier"
              className="relative bg-pirate-gold hover:bg-pirate-gold-light px-4 py-2 rounded-lg hover:scale-105 transition-all font-bold text-pirate-dark shadow-lg"
            >
              <span className="flex items-center gap-2">
                🛒 Panier
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-blood-red text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-pulse shadow-lg">
                    {totalItems}
                  </span>
                )}
              </span>
            </Link>
          </nav>

          {/* Bouton Menu Mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative bg-pirate-gold/80 hover:bg-pirate-gold px-4 py-2 rounded-lg hover:scale-105 transition-all"
          >
            <svg className="w-6 h-6 text-pirate-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-blood-red text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 space-y-3 animate-fade-in border-t-2 border-pirate-gold/30 pt-4">
            <Link 
              href="/" 
              className="block hover:text-pirate-gold transition-colors font-semibold py-2 hover:pl-2"
              onClick={() => setIsMenuOpen(false)}
            >
              ⚓ Accueil
            </Link>
            <Link 
              href="/boutique" 
              className="block hover:text-pirate-gold transition-colors font-semibold py-2 hover:pl-2"
              onClick={() => setIsMenuOpen(false)}
            >
              🍹 Boutique
            </Link>
            <Link 
              href="/a-propos" 
              className="block hover:text-pirate-gold transition-colors font-semibold py-2 hover:pl-2"
              onClick={() => setIsMenuOpen(false)}
            >
              📜 À propos
            </Link>
            <Link
              href="/panier"
              className="block bg-pirate-gold text-pirate-dark font-bold px-4 py-3 rounded-lg hover:bg-pirate-gold-light transition-all shadow-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              🛒 Panier {totalItems > 0 && `(${totalItems})`}
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}

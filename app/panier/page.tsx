'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function PanierPage() {
  const { cart, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

  const handleCheckout = async () => {
    alert('Integration Stripe Checkout a venir ! Le panier contient ' + cart.length + ' produit(s) pour un total de ' + (totalPrice / 100).toFixed(2) + ' euros');
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-ink pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-serif text-4xl text-gold mb-6">Votre panier est vide</h1>
          <div className="gold-line mx-auto mb-6" />
          <p className="text-cream-muted mb-8">
            Decouvrez nos rhums arranges et ajoutez vos favoris au panier.
          </p>
          <Link
            href="/boutique"
            className="inline-block px-8 py-3 bg-gold text-ink font-semibold rounded-lg hover:bg-gold-light transition-colors duration-300"
          >
            Decouvrir nos produits
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ink pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="font-serif text-4xl text-gold mb-2">Votre Panier</h1>
        <div className="gold-line mb-6" />

        <div className="grid md:grid-cols-3 gap-6">
          {/* Product list */}
          <div className="md:col-span-2 space-y-3">
            {cart.map((item) => {
              const price = (item.price_cents / 100).toFixed(2);
              const total = ((item.price_cents * item.quantity) / 100).toFixed(2);

              return (
                <div key={item.id} className="bg-charcoal border border-gold-muted/15 rounded-lg p-4 flex gap-4">
                  <div className="w-20 h-20 bg-ink rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-8 h-8 text-gold-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="6" y="3" width="12" height="18" rx="4" />
                      <rect x="8" y="1" width="8" height="4" rx="2" />
                    </svg>
                  </div>

                  <div className="flex-grow min-w-0">
                    <h3 className="font-serif text-gold text-lg">{item.name}</h3>
                    <p className="text-cream-muted text-sm">{price} &euro; l&apos;unite</p>

                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center bg-slate-dark border border-gold-muted/20 rounded text-cream hover:border-gold-muted transition-colors duration-300"
                        >
                          &minus;
                        </button>
                        <span className="text-cream font-semibold w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center bg-slate-dark border border-gold-muted/20 rounded text-cream hover:border-gold-muted transition-colors duration-300"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-crimson-light hover:text-crimson text-sm ml-auto transition-colors duration-300"
                      >
                        Supprimer
                      </button>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <p className="font-semibold text-warm-white text-lg">{total} &euro;</p>
                  </div>
                </div>
              );
            })}

            <button
              onClick={clearCart}
              className="text-crimson-light hover:text-crimson text-sm transition-colors duration-300"
            >
              Vider le panier
            </button>
          </div>

          {/* Summary */}
          <div className="md:col-span-1">
            <div className="bg-charcoal border border-gold-muted/15 rounded-lg p-5 sticky top-24">
              <h2 className="font-serif text-xl text-gold mb-4">Recapitulatif</h2>

              <div className="space-y-3 mb-4 text-sm">
                <div className="flex justify-between text-cream-muted">
                  <span>Sous-total</span>
                  <span className="text-cream">{(totalPrice / 100).toFixed(2)} &euro;</span>
                </div>
                <div className="flex justify-between text-cream-muted">
                  <span>Livraison</span>
                  <span className="text-teal">Gratuite</span>
                </div>
                <div className="border-t border-gold-muted/20 pt-3 flex justify-between text-lg">
                  <span className="text-cream font-semibold">Total</span>
                  <span className="text-gold font-bold">{(totalPrice / 100).toFixed(2)} &euro;</span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full py-3 bg-gold text-ink font-semibold rounded-lg hover:bg-gold-light transition-colors duration-300"
              >
                Passer la commande
              </button>

              <p className="mt-4 text-crimson-light/60 text-xs text-center">
                L&apos;abus d&apos;alcool est dangereux pour la sante.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

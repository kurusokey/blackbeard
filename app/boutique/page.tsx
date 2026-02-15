import Image from 'next/image';
import ProductCard from '@/components/ProductCard';
import ScrollReveal from '@/components/ScrollReveal';
import { getAllProducts } from '@/lib/products';

export default function BoutiquePage() {
  const products = getAllProducts();

  return (
    <div className="min-h-screen bg-ink">
      {/* Hero banner — cinematic */}
      <div className="relative h-[50vh] min-h-[350px] md:h-[60vh] flex items-end justify-center overflow-hidden pb-16 md:pb-24">
        <Image
          src="/images/spirits.jpg"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/40 to-ink z-[1]" />

        <div className="relative z-10 text-center">
          <ScrollReveal delay={200} direction="up" distance={30} duration={1000}>
            <p className="text-xs uppercase tracking-[0.3em] text-cream-muted mb-4 font-serif">Boutique</p>
          </ScrollReveal>
          <ScrollReveal delay={400} direction="up" distance={40} duration={1000}>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-gold text-shadow-lg mb-4">
              Nos Planteurs
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={600} direction="up" distance={20} duration={1000}>
            <div className="gold-line-wide mx-auto mb-6" />
            <p className="text-cream/80 text-shadow-sm text-base md:text-lg">
              Punchs artisanaux aux fruits des Caraibes — 70cl
            </p>
          </ScrollReveal>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-28">
        {/* Legal notice */}
        <div className="max-w-xl mx-auto mb-12 text-center">
          <p className="text-cream-muted/50 text-xs tracking-wider uppercase">
            L&apos;abus d&apos;alcool est dangereux pour la sante. A consommer avec moderation.
          </p>
        </div>

        {/* Product grid */}
        {products.length === 0 ? (
          <p className="text-center text-cream-muted py-20 text-lg">
            Aucun produit disponible pour le moment.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
            {products.map((product, index) => (
              <ScrollReveal key={product.id} delay={index * 150} direction="up" distance={50}>
                <ProductCard
                  product={product}
                  index={index}
                />
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

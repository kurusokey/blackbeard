import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="card-pirate group cursor-pointer">
      {/* Image produit */}
      <div className="relative h-72 bg-pirate-wood/10 overflow-hidden">
        <Image
          src={product.image_url || '/placeholder-rum.jpg'}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Badge "Nouveau" ou "Promo" */}
        {product.is_featured && (
          <div className="absolute top-4 right-4 bg-pirate-gold text-pirate-dark px-3 py-1 rounded-full font-bold text-sm shadow-lg animate-pulse">
            ⭐ Phare
          </div>
        )}
        
        {/* Overlay hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-pirate-brown via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
      </div>

      {/* Contenu */}
      <div className="p-6 relative z-10">
        {/* Nom produit */}
        <h3 className="text-2xl font-bold mb-3 text-pirate-brown group-hover:text-pirate-gold transition-colors">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-pirate-wood text-sm mb-4 leading-relaxed line-clamp-3">
          {product.description}
        </p>

        {/* Tags ingrédients */}
        {product.ingredients && (
          <div className="flex flex-wrap gap-2 mb-4">
            {product.ingredients.slice(0, 3).map((ingredient, index) => (
              <span 
                key={index}
                className="text-xs bg-parchment-dark text-pirate-wood px-2 py-1 rounded-full border border-pirate-wood/30"
              >
                {ingredient}
              </span>
            ))}
          </div>
        )}

        {/* Prix et CTA */}
        <div className="flex justify-between items-center pt-4 border-t-2 border-pirate-wood/20">
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-rum-amber">
              {product.price}€
            </span>
            <span className="text-xs text-pirate-wood/60">
              {product.volume || '70cl'}
            </span>
          </div>
          
          <Link 
            href={`/produits/${product.slug}`}
            className="btn-pirate px-6 py-3 rounded-lg text-sm hover:scale-105 transition-all"
          >
            Découvrir 🏴‍☠️
          </Link>
        </div>
      </div>

      {/* Coins pliés effet */}
      <div className="absolute bottom-0 left-0 w-0 h-0 border-l-[30px] border-l-transparent border-b-[30px] border-b-pirate-brown/40 opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </div>
  );
}

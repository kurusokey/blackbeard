import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <div className="product-card group">
      {/* Numéro de collection */}
      <div className="collection-number">
        N°{String(index + 1).padStart(2, '0')}
      </div>

      {/* Image produit */}
      <div className="relative h-80 bg-noir-profond overflow-hidden">
        <Image
          src={product.image_url || '/placeholder-rum.jpg'}
          alt={product.name}
          fill
          className="object-contain p-8"
          style={{ objectFit: 'contain' }}
        />
        
        {/* Badge Featured */}
        {product.is_featured && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-transparent border border-or-vieilli text-or-vieilli text-xs uppercase tracking-wider">
            Édition Limitée
          </div>
        )}
      </div>

      {/* Contenu */}
      <div className="product-card-content">
        {/* Nom produit */}
        <h3>
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-sm mb-4">
          {product.description}
        </p>

        {/* Ligne or de séparation */}
        <div className="product-card-divider"></div>

        {/* Prix et volume */}
        <div className="flex items-baseline gap-3 mb-6">
          <span className="product-price text-2xl">
            {product.price}€
          </span>
          <span className="product-volume">
            {product.volume || '70cl'}
          </span>
        </div>

        {/* Bouton */}
        <Link 
          href={`/produits/${product.slug}`}
          className="btn-primary inline-block w-full text-center"
        >
          Voir la fiche
        </Link>
      </div>
    </div>
  );
}

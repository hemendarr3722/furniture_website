import Link from 'next/link';
import Image from 'next/image';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-xl">
        <div className="relative h-64 bg-gray-200 overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-4">
          <p className="text-sm text-amber-600 font-medium mb-1">{product.category}</p>
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">
            {product.name}
          </h3>
          <p className="text-2xl font-bold text-gray-900">
            ₹{product.price.toLocaleString('en-IN')}
          </p>
        </div>
      </div>
    </Link>
  );
}

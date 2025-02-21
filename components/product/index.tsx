import Link from 'next/link';
import Image from 'next/image';

import * as Types from '@/store/types';

type ProductProps = {
  product: Types.Product;
};

export const Product = ({ product }: ProductProps) => {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="hover:bg-color-content-9 group overflow-hidden rounded-lg p-2 transition-colors transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="relative inline-block h-80 w-80 overflow-hidden rounded-xl sm:h-72 sm:w-72">
          <Image
            src={product.image}
            alt={product.name}
            height={400}
            width={400}
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <div className="flex items-center justify-between py-1">
          <p className="text-color-text-secondary text-lg">{product.name}</p>
          <p className="text-md text-color-text-tertiary">$ {product.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default Product;

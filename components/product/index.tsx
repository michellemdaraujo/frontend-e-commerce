import Link from 'next/link';
import Image from 'next/image';

import * as Types from '@/store/types';

type ProductProps = {
  product: Types.Product;
};

export const Product = ({ product }: ProductProps) => {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="overflow-hidden rounded-lg p-2 hover:-translate-y-2 hover:bg-gray-100 hover:shadow-xl">
        <div className="relative inline-block h-80 w-80 overflow-hidden rounded-xl sm:h-72 sm:w-72">
          <Image
            src={product.image}
            alt={product.name}
            height={400}
            width={400}
          />
        </div>
        <div className="flex items-center justify-between py-1">
          <p className="text-lg text-gray-600">{product.name}</p>
          <p className="text-md text-gray-500">$ {product.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default Product;

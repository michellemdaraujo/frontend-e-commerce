interface Product {
  brand_id: number;
  category_id: number[];
  description: string;
  designer_id: number;
  id: number;
  image: string;
  name: string;
  price: number;
  slug: string;
}

interface Designer {
  id: number;
  name: string;
  slug: string;
}

interface Brand {
  id: number;
  name: string;
  slug: string;
}

interface Category {
  id: number;
  name: string;
  slug: string;
}

export type { Product, Designer, Brand, Category };

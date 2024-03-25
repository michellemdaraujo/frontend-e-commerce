import { useEffect, useState, useMemo, useCallback, ReactElement } from 'react';
import Image from 'next/image';
import { NextSeo } from 'next-seo';

import { useAppDispatch, useAppSelector } from '@/store/store';
import { getProducts } from '@/store/features/products-slice';
import { getDesigners } from '@/store/features/designers-slice';
import { getBrands } from '@/store/features/brands-slice';
import { getCategories } from '@/store/features/categories-slice';
import Product from '@/components/product';
import Select from '@/components/select';
import Spinner from '@/components/spinner';
import { Layout } from '@/layouts/layout';

import EmptySearchImage from '../public/empty.jpg';
import {
  Brand,
  Category,
  Designer,
  Product as ProductType,
} from '@/store/types';

export const Home = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products);
  const designers = useAppSelector((state) => state.designers);
  const brands = useAppSelector((state) => state.brands);
  const categories = useAppSelector((state) => state.categories);
  const isGettingProducts = useAppSelector(
    (state) => state.loading.getProducts,
  );
  const isGettingDesigners = useAppSelector(
    (state) => state.loading.getDesigners,
  );
  const isGettingBrands = useAppSelector((state) => state.loading.getBrands);
  const isGettingCategories = useAppSelector(
    (state) => state.loading.getCategories,
  );

  const [selectedDesigner, setSelectedDesigner] = useState<string | number>('');
  const [selectedBrand, setSelectedBrand] = useState<string | number>('');
  const [selectedCategory, setSelectedCategory] = useState<string | number>('');

  useEffect(() => {
    const filters = {
      designer_id: selectedDesigner,
      brand_id: selectedBrand,
      category_id: selectedCategory,
    };

    dispatch(getProducts(filters));
  }, [dispatch, selectedBrand, selectedCategory, selectedDesigner]);

  // Get filters
  useEffect(() => {
    dispatch(getDesigners());
    dispatch(getBrands());
    dispatch(getCategories([]));
  }, [dispatch]);

  const designersOptions = useMemo(
    () =>
      designers?.map((designer: Designer) => ({
        name: designer.name,
        value: designer.id,
      })),
    [designers],
  );

  const onChangeBrand = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const { value } = event.target;
      setSelectedBrand(value);
    },
    [],
  );

  const brandsOptions = useMemo(
    () =>
      brands?.map((brand: Brand) => ({
        name: brand.name,
        value: brand.id,
      })),
    [brands],
  );

  const onChangeDesigner = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const { value } = event.target;
      setSelectedDesigner(value);
    },
    [],
  );

  const categoriesOptions = useMemo(
    () =>
      categories?.map((category: Category) => ({
        name: category.name,
        value: category.id,
      })),
    [categories],
  );

  const onChangeCategory = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const { value } = event.target;
      setSelectedCategory(value);
    },
    [],
  );

  const onResetFilters = useCallback(() => {
    setSelectedBrand('');
    setSelectedDesigner('');
    setSelectedCategory('');
  }, []);

  const renderContent = useMemo(() => {
    if (isGettingProducts || isGettingProducts === undefined) {
      return (
        <div className="my-32 flex justify-center">
          <Spinner />
        </div>
      );
    }

    if (products.length) {
      return (
        <ul className="flex flex-wrap justify-center py-2">
          {products.map((product: ProductType) => (
            <li key={product.id} className="mx-2 my-4">
              <Product product={product} />
            </li>
          ))}
        </ul>
      );
    }

    return (
      <div className="mb-16 flex flex-col items-center md:mb-32">
        <div className="relative h-96 w-96">
          <Image src={EmptySearchImage} alt="Empty" height={600} width={600} />
        </div>
        <h2 className="text-center text-lg md:text-xl">
          There are no products in our catalog that fit your search.
        </h2>
      </div>
    );
  }, [isGettingProducts, products]);

  return (
    <main className="px-8 py-8 md:px-16">
      <NextSeo
        title="E-Commerce // Products"
        description="Browse the best fashion products in the universe"
      />
      <div className="mx-auto max-w-screen-xl">
        <h1 className="text-xl text-gray-800">Products Catalog</h1>
        <div className="flex flex-col items-start py-4 md:flex-row">
          <p className="text-md mr-8 text-gray-600">Filter by: </p>
          <Select
            label="Designers"
            items={designersOptions}
            hasEmptyValue
            onChange={onChangeDesigner}
            value={selectedDesigner}
            className="min-w-48"
            isLoadingOptions={isGettingDesigners}
          />
          <Select
            label="Brands"
            items={brandsOptions}
            hasEmptyValue
            onChange={onChangeBrand}
            value={selectedBrand}
            className="min-w-48 md:ml-4"
            isLoadingOptions={isGettingBrands}
          />
          <Select
            label="Categories"
            items={categoriesOptions}
            hasEmptyValue
            onChange={onChangeCategory}
            value={selectedCategory}
            className="min-w-48 md:ml-4"
            isLoadingOptions={isGettingCategories}
          />
          {(selectedBrand || selectedCategory || selectedDesigner) && (
            <button
              className="self-end rounded-full px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 md:ml-2"
              onClick={onResetFilters}
            >
              X Clear filters
            </button>
          )}
        </div>
        {renderContent}
      </div>
    </main>
  );
};

Home.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Home;

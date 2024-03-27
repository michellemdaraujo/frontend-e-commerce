import { useEffect, useState, useMemo, useCallback, ReactElement } from 'react';
import Image from 'next/image';
import { NextSeo } from 'next-seo';

import { useAppDispatch, useAppSelector } from '@/store/store';
import { getProducts } from '@/store/features/products-slice';
import { getDesigners } from '@/store/features/designers-slice';
import { getBrands } from '@/store/features/brands-slice';
import { getCategories } from '@/store/features/categories-slice';
import Product from '@/components/product';
import MultiSelect from '@/components/multi-select';
import Spinner from '@/components/spinner';
import { Layout } from '@/layouts/layout';
import { formatFilters } from '@/utils/helpers';

import EmptySearchImage from '../public/empty.jpg';
import {
  Brand,
  Category,
  Designer,
  Product as ProductType,
} from '@/store/types';
import {
  SelectValue,
  Option,
} from 'react-tailwindcss-select/dist/components/type';

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

  const [selectedDesigners, setSelectedDesigners] = useState<Option[] | null>(
    null,
  );
  const [selectedBrands, setSelectedBrands] = useState<Option[] | null>(null);
  const [selectedCategories, setSelectedCategories] = useState<Option[] | null>(
    null,
  );

  useEffect(() => {
    const filters = formatFilters({
      designers: selectedDesigners,
      brands: selectedBrands,
      categories: selectedCategories,
    });

    dispatch(getProducts(filters));
  }, [dispatch, selectedBrands, selectedCategories, selectedDesigners]);

  // Get filters
  useEffect(() => {
    dispatch(getDesigners());
    dispatch(getBrands());
    dispatch(getCategories(null));
  }, [dispatch]);

  const designersOptions = useMemo(
    () =>
      designers?.map((designer: Designer) => ({
        label: designer.name,
        value: designer.id,
      })),
    [designers],
  );

  const onChangeDesigner = useCallback((option: SelectValue) => {
    setSelectedDesigners((option as Option[]) || null);
  }, []);

  const brandsOptions = useMemo(
    () =>
      brands?.map((brand: Brand) => ({
        label: brand.name,
        value: brand.id,
      })),
    [brands],
  );

  const onChangeBrand = useCallback((option: SelectValue) => {
    setSelectedBrands((option as Option[]) || null);
  }, []);

  const categoriesOptions = useMemo(
    () =>
      categories?.map((category: Category) => ({
        label: category.name,
        value: category.id,
      })),
    [categories],
  );

  const onChangeCategory = useCallback((option: SelectValue) => {
    setSelectedCategories((option as Option[]) || null);
  }, []);

  const onResetFilters = useCallback(() => {
    setSelectedDesigners(null);
    setSelectedBrands(null);
    setSelectedCategories(null);
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
        <h1 className="text-3xl text-gray-800">Products Catalog</h1>
        <div className="flex flex-col py-4 lg:flex-row lg:items-start">
          <p className="text-md mr-8 text-gray-600">Filter by: </p>
          <div className="flex flex-col flex-wrap md:flex-1 lg:flex-row">
            <MultiSelect
              label="Designers"
              options={designersOptions}
              value={selectedDesigners}
              primaryColor="blue"
              onChange={onChangeDesigner}
              isLoadingOptions={isGettingDesigners}
              className="flex-1 lg:mr-4"
            />
            <MultiSelect
              label="Brands"
              options={brandsOptions}
              value={selectedBrands}
              primaryColor="blue"
              onChange={onChangeBrand}
              isLoadingOptions={isGettingBrands}
              className="flex-1 lg:mr-4"
            />
            <MultiSelect
              label="Categories"
              options={categoriesOptions}
              value={selectedCategories}
              primaryColor="blue"
              onChange={onChangeCategory}
              isLoadingOptions={isGettingCategories}
              className="flex-1"
            />
          </div>
        </div>
        {!!(
          selectedBrands?.length ||
          selectedCategories?.length ||
          selectedDesigners?.length
        ) && (
          <button
            className="rounded-full p-2 text-sm text-gray-600 hover:bg-gray-50"
            onClick={onResetFilters}
          >
            X Clear filters
          </button>
        )}
        {renderContent}
      </div>
    </main>
  );
};

Home.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Home;

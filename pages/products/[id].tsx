import Image from 'next/image';
import { useEffect, useMemo } from 'react';
import Link from 'next/link';
import { NextSeo } from 'next-seo';

import { useAppDispatch, useAppSelector, wrapper } from '@/store/store';
import {
  productByIdSelector,
  designerByIdSelector,
  brandByIdSelector,
  categoriesByIdSelector,
} from '@/utils/selectors';
import { getProductById } from '@/store/features/products-slice';
import { getDesignerById } from '@/store/features/designers-slice';
import { getBrandById } from '@/store/features/brands-slice';
import { getCategories } from '@/store/features/categories-slice';
import { Category } from '@/store/types';
import Spinner from '@/components/spinner';
import { useRouter } from 'next/router';

const ProductPage = () => {
  const router = useRouter();
  const id = router.query.id || '';

  const dispatch = useAppDispatch();
  const product = useAppSelector((state) => productByIdSelector(state, id));
  const designer = useAppSelector((state) =>
    designerByIdSelector(state, product?.designer_id),
  );
  const brand = useAppSelector((state) =>
    brandByIdSelector(state, product?.brand_id),
  );
  const categories = useAppSelector((state) =>
    categoriesByIdSelector(state, product?.category_id),
  );
  const isGettingProduct = useAppSelector(
    (state) => state.loading.getProductById,
  );
  const isGettingDesigner = useAppSelector(
    (state) => state.loading.getDesignerById,
  );
  const isGettingBrand = useAppSelector((state) => state.loading.getBrandById);

  useEffect(() => {
    if (!product) {
      dispatch(getProductById(id as string));
    }
  }, [dispatch, product, id]);

  useEffect(() => {
    if (product?.designer_id && !designer) {
      dispatch(getDesignerById(product.designer_id));
    }
  }, [designer, dispatch, product?.designer_id]);

  useEffect(() => {
    if (product?.brand_id && !brand) {
      dispatch(getBrandById(product.brand_id));
    }
  }, [brand, dispatch, product?.brand_id]);

  useEffect(() => {
    if (product?.category_id && !categories) {
      dispatch(getCategories(product.category_id));
    }
  }, [categories, dispatch, product?.category_id]);

  const productDetails = useMemo(
    () => [
      {
        label: 'Designed by',
        value: designer?.name,
        loading: isGettingDesigner,
      },
      {
        label: 'Brand',
        value: brand?.name,
        loading: isGettingBrand,
      },
    ],
    [brand?.name, designer?.name, isGettingBrand, isGettingDesigner],
  );

  const renderDetails = useMemo(
    () =>
      productDetails.map(({ label, value, loading }) => {
        if (loading) {
          return <Spinner key={label} size="small" />;
        }

        return (
          value && (
            <p className="mt-2" key={label}>
              <span className="font-bold text-gray-700">{label} </span>
              <span className="text-gray-600">{value}</span>
            </p>
          )
        );
      }),
    [productDetails],
  );

  if (!product || isGettingProduct) {
    return (
      <div className="my-32 flex justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center py-8">
      <NextSeo
        title={`E-Commerce // ${product.name}`}
        description={product.description}
      />
      <div className="max-w-screen-xl px-4 ">
        <Link
          href="/"
          className="text-gray-600 hover:text-gray-800 hover:underline"
        >
          ← Back to products
        </Link>
        <div className="flex justify-center py-6">
          <div className="flex min-h-96 flex-col items-center md:flex-row md:items-start">
            <div className="img-wrapper relative mb-4 inline-block flex-1">
              <Image
                src={product.image}
                alt={product.name}
                sizes="100vw"
                width={600}
                height={600}
                className="overflow-hidden rounded-xl"
                priority
              />
            </div>
            <div className="flex-1 md:ml-12">
              <p className="mb-2 text-2xl font-bold text-gray-800">
                {product.name}
              </p>

              <p className="mb-4 text-sm text-gray-600">
                {product.description}
              </p>
              <p>
                <span className=" text-lg font-bold text-gray-700">
                  Price:{' '}
                </span>
                <span className="text-gray-600">$ {product.price}</span>
              </p>
              <p className="mt-8 text-lg font-bold text-gray-800">
                Product details:
              </p>
              {renderDetails}
              {categories?.length > 0 && (
                <div className="mt-12 flex flex-wrap items-center">
                  {categories?.map((category: Category) => (
                    <p
                      key={category.id}
                      className="mr-2 rounded-full bg-gray-100 px-4 py-2 text-sm"
                    >
                      {category.name}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductPage.getInitialProps = wrapper.getInitialPageProps(
  ({ dispatch, getState }) =>
    async (context) => {
      const { id } = context.query;
      await dispatch(getProductById(id as string));

      const product = getState().products[0];
      await dispatch(getDesignerById(product.designer_id));
      await dispatch(getBrandById(product.brand_id));
      await dispatch(getCategories(product.category_id));
    },
);

export default ProductPage;

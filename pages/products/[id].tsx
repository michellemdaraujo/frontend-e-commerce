import Image from 'next/image';
import { useEffect, useMemo, ReactElement } from 'react';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

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
import { Layout } from '@/layouts/layout';

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
              <span className="text-color-text-tertiary font-bold">
                {label}{' '}
              </span>
              <span className="text-color-text-secondary">{value}</span>
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
          className="hover:text-color-text-primary text-color-text-secondary hover:underline"
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
                className="bg-color-content-9 overflow-hidden rounded-xl"
                priority
              />
            </div>
            <div className="flex-1 md:ml-12">
              <p className="text-color-text-primary mb-2 text-2xl font-bold">
                {product.name}
              </p>

              <p className="text-color-text-secondary mb-4 text-sm">
                {product.description}
              </p>
              <p>
                <span className=" text-color-text-tertiary text-lg font-bold">
                  Price:{' '}
                </span>
                <span className="text-color-text-secondary">
                  $ {product.price}
                </span>
              </p>
              <p className="text-color-text-primary mt-8 text-lg font-bold">
                Product details:
              </p>
              {renderDetails}
              {categories?.length > 0 && (
                <div className="mt-12 flex flex-wrap items-center">
                  {categories?.map((category: Category) => (
                    <p
                      key={category.id}
                      className="bg-color-content-9 mr-2 rounded-full px-4 py-2 text-sm"
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

ProductPage.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default ProductPage;

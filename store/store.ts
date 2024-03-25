import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

import productsSlice from './features/products-slice';
import designersSlice from './features/designers-slice';
import brandsSlice from './features/brands-slice';
import categoriesSlice from './features/categories-slice';
import loadingSlice from './features/loading-slice';

export const store = configureStore({
  reducer: {
    products: productsSlice,
    designers: designersSlice,
    brands: brandsSlice,
    categories: categoriesSlice,
    loading: loadingSlice,
  },
});

export const useAppDispatch: () => typeof store.dispatch = () =>
  useDispatch<typeof store.dispatch>();
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;

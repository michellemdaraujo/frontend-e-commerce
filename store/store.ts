import {
  configureStore,
  Action,
  AnyAction,
  combineReducers,
  ThunkAction,
} from '@reduxjs/toolkit';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

import productsSlice from './features/products-slice';
import designersSlice from './features/designers-slice';
import brandsSlice from './features/brands-slice';
import categoriesSlice from './features/categories-slice';
import loadingSlice from './features/loading-slice';

const combinedReducers = combineReducers({
  products: productsSlice,
  designers: designersSlice,
  brands: brandsSlice,
  categories: categoriesSlice,
  loading: loadingSlice,
});

const reducer = (
  state: ReturnType<typeof combinedReducers>,
  action: AnyAction,
) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  }
  return combinedReducers(state, action);
};

const makeStore = () =>
  configureStore({
    reducer,
  });

type Store = ReturnType<typeof makeStore>;

export const store = configureStore({
  reducer: {
    products: productsSlice,
    designers: designersSlice,
    brands: brandsSlice,
    categories: categoriesSlice,
    loading: loadingSlice,
  },
});

export type AppDispatch = Store['dispatch'];
export type RootState = ReturnType<Store['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const wrapper = createWrapper(makeStore, { debug: true });

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

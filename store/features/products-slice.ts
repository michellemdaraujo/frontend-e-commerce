import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import queryString from 'query-string';

import { API_URL } from '@/config/environment';
import { FilterType } from '@/utils/helpers';

import { Product } from '../types';

const INITIAL_STATE: Product[] = [];

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async (filters: FilterType, { rejectWithValue }) => {
    try {
      const queryFilters = queryString.stringify(filters);

      const endpoint = queryFilters ? `/products?${queryFilters}` : '/products';

      const response = await fetch(`${API_URL}${endpoint}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          Accept: 'application/json',
        },
      });

      const data = await response.json();

      if (response.status >= 400) {
        return rejectWithValue(data);
      }

      return data;
    } catch (err) {
      const error = err as Error;

      if (!('response' in error)) {
        throw err;
      }
    }
  },
);

export const getProductById = createAsyncThunk(
  'products/getProductById',
  async (id: string | number, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_URL}/products/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          Accept: 'application/json',
        },
      });

      const data = await response.json();

      if (response.status >= 400) {
        return rejectWithValue(data);
      }

      return data;
    } catch (err) {
      const error = err as Error;

      if (!('response' in error)) {
        throw err;
      }
    }
  },
);

export const productsSlice = createSlice({
  name: 'products',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, { payload }) => {
      return payload;
    });
    builder.addCase(
      getProductById.fulfilled,
      (state, { payload }: { payload: Product }) => {
        const newState = [...state, payload];
        return newState;
      },
    );
  },
});

export default productsSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { API_URL } from '@/config/environment';

import { Brand } from '../types';

const INITIAL_STATE: Brand[] = [];

export const getBrands = createAsyncThunk(
  'brands/getBrands',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_URL}/brands`, {
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

export const getBrandById = createAsyncThunk(
  'brands/getBrandById',
  async (id: string | number, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_URL}/brands/${id}`, {
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

export const brandsSlice = createSlice({
  name: 'brands',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBrands.fulfilled, (state, { payload }) => {
      return payload;
    });
    builder.addCase(
      getBrandById.fulfilled,
      (state, { payload }: { payload: Brand }) => {
        const newState = [...state, payload];
        return newState;
      },
    );
  },
});

export default brandsSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import queryString from 'query-string';

import { API_URL } from '@/config/environment';

import { Category } from '../types';

const INITIAL_STATE: Category[] = [];

export const getCategories = createAsyncThunk(
  'category/getCategories',
  async (ids: null | number[], { rejectWithValue }) => {
    try {
      const formattedQuery = ids && queryString.stringify({ id: ids });
      const endpoint = formattedQuery
        ? `/categories?${formattedQuery}`
        : '/categories';

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

export const categorySlice = createSlice({
  name: 'category',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategories.fulfilled, (state, { payload }) => {
      return payload;
    });
  },
});

export default categorySlice.reducer;

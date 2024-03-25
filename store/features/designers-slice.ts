import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { API_URL } from '@/config/environment';
import { Designer } from '../types';

const INITIAL_STATE: Designer[] = [];

export const getDesigners = createAsyncThunk(
  'designers/getDesigners',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_URL}/designers`, {
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

export const getDesignerById = createAsyncThunk(
  'designers/getDesignerById',
  async (id: string | number, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_URL}/designers/${id}`, {
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

export const designersSlice = createSlice({
  name: 'designers',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDesigners.fulfilled, (state, { payload }) => {
      return payload;
    });
    builder.addCase(
      getDesignerById.fulfilled,
      (state, { payload }: { payload: Designer }) => {
        const newState = [...state, payload];
        return newState;
      },
    );
  },
});

export default designersSlice.reducer;

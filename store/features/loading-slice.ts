import { createSlice } from '@reduxjs/toolkit';

import { getProducts, getProductById } from './products-slice';
import { getDesigners, getDesignerById } from './designers-slice';
import { getBrands, getBrandById } from './brands-slice';
import { getCategories } from './categories-slice';

type LoadingType = {
  getProducts?: boolean;
  getProductById?: boolean;
  getDesigners?: boolean;
  getDesignerById?: boolean;
  getBrands?: boolean;
  getBrandById?: boolean;
  getCategories?: boolean;
};

const INITIAL_STATE: LoadingType = {
  getProducts: undefined,
  getProductById: undefined,
  getDesigners: undefined,
  getDesignerById: undefined,
  getBrands: undefined,
  getBrandById: undefined,
  getCategories: undefined,
};

const loadingSlice = createSlice({
  name: 'loading',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.getProducts = true;
    });
    builder.addCase(getProducts.rejected, (state) => {
      state.getProducts = false;
    });
    builder.addCase(getProducts.fulfilled, (state) => {
      state.getProducts = false;
    });
    builder.addCase(getProductById.pending, (state) => {
      state.getProductById = true;
    });
    builder.addCase(getProductById.rejected, (state) => {
      state.getProductById = false;
    });
    builder.addCase(getProductById.fulfilled, (state) => {
      state.getProductById = false;
    });
    builder.addCase(getDesigners.pending, (state) => {
      state.getDesigners = true;
    });
    builder.addCase(getDesigners.rejected, (state) => {
      state.getDesigners = false;
    });
    builder.addCase(getDesigners.fulfilled, (state) => {
      state.getDesigners = false;
    });
    builder.addCase(getDesignerById.pending, (state) => {
      state.getDesignerById = true;
    });
    builder.addCase(getDesignerById.rejected, (state) => {
      state.getDesignerById = false;
    });
    builder.addCase(getDesignerById.fulfilled, (state) => {
      state.getDesignerById = false;
    });
    builder.addCase(getBrands.pending, (state) => {
      state.getBrands = true;
    });
    builder.addCase(getBrands.rejected, (state) => {
      state.getBrands = false;
    });
    builder.addCase(getBrands.fulfilled, (state) => {
      state.getBrands = false;
    });
    builder.addCase(getBrandById.pending, (state) => {
      state.getBrandById = true;
    });
    builder.addCase(getBrandById.rejected, (state) => {
      state.getBrandById = false;
    });
    builder.addCase(getBrandById.fulfilled, (state) => {
      state.getBrandById = false;
    });
    builder.addCase(getCategories.pending, (state) => {
      state.getCategories = true;
    });
    builder.addCase(getCategories.rejected, (state) => {
      state.getCategories = false;
    });
    builder.addCase(getCategories.fulfilled, (state) => {
      state.getCategories = false;
    });
  },
});

export default loadingSlice.reducer;

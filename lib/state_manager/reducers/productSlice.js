import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { cache } from "react";
import axios from "axios";

export const getProduct = createAsyncThunk("get/product", async () => {
  try {
    const apiUrl = "https://dummyjson.com/products";
    const response = await axios.get(apiUrl, {
      cache: "no-store",
      next: { revalidate: 3600 },
    });
    return response.data;
  } catch (error) {
    return {
      message: "failed",
    };
  }
});

const initialState = {
  data: {},
  status: "idle",
};

export const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  extraReducers(builder) {
    builder
      .addCase(getProduct.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "success";
      })
      .addCase(getProduct.pending, (state) => {
        state.data = {};
        state.status = "loading";
      });
  },
});

export const getProductData = (state) => state.productData.data;
export const getProductStatus = (state) => state.productData.status;

export default productSlice.reducer;

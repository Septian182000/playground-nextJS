import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductDetail = createAsyncThunk(
  "get/product_detail",
  async ({ id }) => {
    try {
      const apiUrl = `https://dummyjson.com/products/${id}`;
      const response = await axios.get(apiUrl);
      return response.data;
    } catch (error) {
      return {
        message: "failed",
      };
    }
  }
);

const initialState = {
  data: {},
  status: "idle",
};

export const productDetailSlice = createSlice({
  name: "product-detail",
  initialState: initialState,
  extraReducers(builder) {
    builder
      .addCase(getProductDetail.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "success";
      })
      .addCase(getProductDetail.pending, (state) => {
        state.data = {};
        state.status = "loading";
      });
  },
});

export const getProductDetailData = (state) => state.productDetailData.data;
export const getProductDetailStatus = (state) => state.productDetailData.status;

export default productDetailSlice.reducer;

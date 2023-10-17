import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/productSlice";
import productDetailReducer from "./reducers/productDetailSlice";

export const store = configureStore({
  reducer: {
    productData: productReducer,
    productDetailData: productDetailReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

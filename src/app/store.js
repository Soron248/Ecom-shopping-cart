import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../feature/productSlice";

export const store = configureStore({
  reducer: {
    productReducer: productReducer,
  },
});

export default store;

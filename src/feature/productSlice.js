import { createSlice } from "@reduxjs/toolkit";

const initialProductData = {
  products: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState: initialProductData,
  reducers: {
    addProduct: (state, action) => {
      const iteamIndex = state.products.findIndex(
        (item) => item.id === action.payload.id
      );
      if (iteamIndex >= 0) {
        state.products[iteamIndex].qnty += 1;
      } else {
        state.products.push({ ...action.payload, qnty: 1 });
      }
    },
    deleteProduct: (state, action) => {
      const id = action.payload;
      state.products = state.products.filter((data) => data.id !== id);
    },
    removeOneProduct: (state, action) => {
      const iteamIndex = state.products.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.products[iteamIndex].qnty >= 2) {
        state.products[iteamIndex].qnty -= 1;
      }
    },
  },
});

export const { addProduct, deleteProduct, removeOneProduct } =
  productSlice.actions;
export default productSlice.reducer;

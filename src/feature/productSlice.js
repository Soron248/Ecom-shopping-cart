import { createSlice } from "@reduxjs/toolkit";

const initialProductData = {
  products: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState: initialProductData,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
  },
});

export const { addProduct } = productSlice.actions;
export default productSlice.reducer;

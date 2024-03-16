import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

const sliceProducts = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (state, action) => {
      state.list = action.payload;
    },
    deleteSingleProduct: (state, action) => {
      const {id}=action.payload;
      state.list=state.list.filter(x=>x.id!==id);
    },
  },
});

export const { addProducts,deleteSingleProduct } = sliceProducts.actions;
export default sliceProducts.reducer;

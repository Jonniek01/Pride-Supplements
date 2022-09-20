import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../slices/productSlice";
import codeSlice from "../slices/codeSlice";


const store = configureStore({
  reducer: {
    products:productSlice,
    code:codeSlice,
  },
});

export default store;
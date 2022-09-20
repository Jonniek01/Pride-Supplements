import { createSlice } from "@reduxjs/toolkit";

const codeSlice = createSlice({
  name: "code",
  initialState: [],
  reducers: {
    changeCode: (state, { payload }) => {
      return state = payload;
   }
  },
});

export const { changeCode } = codeSlice.actions;

export default codeSlice.reducer;
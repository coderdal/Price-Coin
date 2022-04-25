import { createSlice } from "@reduxjs/toolkit";

const maindataSlice = createSlice({
  name: "maindata",
  initialState: {
    value: ["test"],
  },
  reducers: {
    setMainData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default maindataSlice.reducer;
export const { setMainData } = maindataSlice.actions;

import { createSlice } from "@reduxjs/toolkit";

const isloading = createSlice({
  name: "isloading",
  initialState: {
    value: true,
  },
  reducers: {
    setLoading: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default isloading.reducer;
export const { setLoading } = isloading.actions;

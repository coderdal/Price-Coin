import { configureStore } from "@reduxjs/toolkit";

import maindataSlice from "./maindataSlice";

import isloading from "./isloadingSlice";

export const store = configureStore({
  reducer: {
    maindata: maindataSlice,
    isloading: isloading,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice";
import { useEffect } from "react";

const store = configureStore({
  reducer: {
    data: dataSlice,
  },
});

export default store;

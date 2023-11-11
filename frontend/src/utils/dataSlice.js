import { createSlice } from "@reduxjs/toolkit";
import { data } from "../assets/data";
const dataSlice = createSlice({
  name: "data",
  initialState: {
    allData: data,
  },
  reducers: {},
});

export const {} = dataSlice.actions;

export default dataSlice.reducer;

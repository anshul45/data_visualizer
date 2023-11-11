import { createSlice } from "@reduxjs/toolkit";
import { data } from "../assets/data";
const dataSlice = createSlice({
  name: "data",
  initialState: {
    allData: data,
    initialData: data,
  },
  reducers: {
    filterData: (state, action) => {
      const { property, value } = action.payload;
      state.allData = state.initialData.filter(
        (item) =>
          item[property] === value ||
          (property === "year" && item["start_year"] === value) ||
          item["last_year"] === value
      );
    },
  },
});

export const { filterData } = dataSlice.actions;

export default dataSlice.reducer;

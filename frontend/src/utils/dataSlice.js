import { createSlice } from "@reduxjs/toolkit";
const dataSlice = createSlice({
  name: "data",
  initialState: {
    allData: [],
    initialData: [],
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
    setData: (state, action) => {
      state.allData = state.initialData = action.payload;
    },
    refresh: (state, action) => {
      state.allData = state.initialData;
    },
  },
});

export const { filterData, setData, refresh } = dataSlice.actions;

export default dataSlice.reducer;

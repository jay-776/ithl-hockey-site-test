import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const scheduleSlice = createSlice({
  name: "schedule",
  initialState: {
    currentPage: "home",
    subPage: "",
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setCurrentPage } = scheduleSlice.actions;
export default scheduleSlice.reducer;

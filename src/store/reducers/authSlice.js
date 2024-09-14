import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    authStat: false,
    spinStat: true,
  },
  reducers: {
    setAuthStat: (state, action) => {
      state.authStat = action.payload;
    },
    setSpinStat: (state, action) => {
      state.spinStat = action.payload;
    },
  },
});

export const { setAuthStat, setSpinStat } = authSlice.actions;
export default authSlice.reducer;

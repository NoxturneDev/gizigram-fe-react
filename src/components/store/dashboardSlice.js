import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tabs: "home",
};

const dashboardSlice = createSlice({
  name: "dashnoard",
  initialState,
  reducers: {
    setTabs(state, action) {
      state.tabs = action.payload;
    },
  },
});

export const { setTabs } = dashboardSlice.actions;
export default dashboardSlice.reducer

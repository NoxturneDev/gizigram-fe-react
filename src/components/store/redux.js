import { configureStore } from "@reduxjs/toolkit";
import scannerReducer from "./scannerSlice";
import dashboardReducer from "./dashboardSlice";

const store = configureStore({
  reducer: {
    scanner: scannerReducer,
    dashboard: dashboardReducer
  }
})


export default store;
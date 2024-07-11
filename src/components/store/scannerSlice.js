import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isScanning: false,
}

const scannerSlice = createSlice({
  name: "scanner",
  initialState,
  reducers: {
    setScanning: (state, action) => {
      state.isScanning = action.payload
    }
  }
})

export const { setScanning } = scannerSlice.actions
export default scannerSlice.reducer
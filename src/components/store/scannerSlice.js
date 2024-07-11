import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  scannerProgress: 1,
}

const scannerSlice = createSlice({
  name: "scanner",
  initialState,
  reducers: {
    setNextProgress(state) {
      state.scannerProgress += 1
      console.log(state.scannerProgress)
    },
    setPreviosProgress(state) {
      state.scannerProgress -= 1
    }
  }
})

export const { setNextProgress, setPreviosProgress } = scannerSlice.actions
export default scannerSlice.reducer
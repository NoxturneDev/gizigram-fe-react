import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  scannerProgress: 1,
  scanResultJson: {
    advice: null,
  },
  scanResultString: '',
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
    },
    saveScanResult(state, action) {
      state.scanResultJson = action.payload
      state.scanResultString = JSON.stringify(action.payload?.advice, null, 2)
    }
  }
})

export const { setNextProgress, setPreviosProgress , saveScanResult} = scannerSlice.actions
export default scannerSlice.reducer

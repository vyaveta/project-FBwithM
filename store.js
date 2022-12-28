import { configureStore } from '@reduxjs/toolkit'
// import { setColorMode } from './slices/darkModeSlice'
import setColorMode from './slices/darkModeSlice'

export const store = configureStore({
  reducer: {
    darkmode: setColorMode
  },
})
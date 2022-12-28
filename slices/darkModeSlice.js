import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'


const initialState = {
  value: Cookies.get('FreeBirdDarkMode') == 'true' || false,
}

export const setColorModeSlice = createSlice({
  name: 'darkmode',
  initialState,
  reducers: {
    changeColorMode: (state) => {
      state.value = !state.value
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeColorMode } = setColorModeSlice.actions

export default setColorModeSlice.reducer


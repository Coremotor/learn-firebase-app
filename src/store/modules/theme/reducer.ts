import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TThemeState } from 'store/modules/theme/types'

const initialState: TThemeState = { theme: 'dark', activeTab: '' }

const userSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state: TThemeState, action: PayloadAction<string>) {
      state.theme = action.payload
    },
    setActiveTab(state: TThemeState, action: PayloadAction<string>) {
      state.activeTab = action.payload
    },
  },
})

export const { setTheme, setActiveTab } = userSlice.actions

export default userSlice.reducer

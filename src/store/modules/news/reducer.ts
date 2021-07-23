import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TNewsInDB, TNewsState } from 'store/modules/news/types'

const initialState: TNewsState = { isLoading: false, newsList: [] }

const userSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setIsLoading(state: TNewsState, action: PayloadAction<boolean>) {
      state.isLoading = action.payload
    },
    setNewsListFromDB(state: TNewsState, action: PayloadAction<TNewsInDB[]>) {
      state.newsList = action.payload
    },
  },
})

export const { setIsLoading, setNewsListFromDB } = userSlice.actions

export default userSlice.reducer

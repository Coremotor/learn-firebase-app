import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TRegState } from 'store/modules/registration/types'

const initialState: TRegState = { isLoading: false }

const userSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    setIsLoading(state: TRegState, action: PayloadAction<boolean>) {
      state.isLoading = action.payload
    },
  },
})

export const { setIsLoading } = userSlice.actions

export default userSlice.reducer

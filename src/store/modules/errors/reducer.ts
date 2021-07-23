import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TError, TErrorState } from './types'

const initialState: TErrorState = { errorObj: null }

const userSlice = createSlice({
  name: 'errors',
  initialState,
  reducers: {
    setError(state: TErrorState, action: PayloadAction<TError | null>) {
      state.errorObj = action.payload
    },
  },
})

export const { setError } = userSlice.actions

export default userSlice.reducer

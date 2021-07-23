import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TAuthState, TAuthFirebaseUser } from 'store/modules/auth/types'

const initialState: TAuthState = { isLoading: false, user: null }

const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsLoading(state: TAuthState, action: PayloadAction<boolean>) {
      state.isLoading = action.payload
    },
    setUser(state: TAuthState, action: PayloadAction<TAuthFirebaseUser | null>) {
      state.user = action.payload
    },
  },
})

export const { setIsLoading, setUser } = userSlice.actions

export default userSlice.reducer

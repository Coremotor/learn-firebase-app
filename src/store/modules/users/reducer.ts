import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TCurrentUser, TUserInDB, TUsersState } from 'store/modules/users/types'

const initialState: TUsersState = { isLoading: false, usersList: [], currentUser: null }

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setIsLoading(state: TUsersState, action: PayloadAction<boolean>) {
      state.isLoading = action.payload
    },
    setUsersListFromDB(state: TUsersState, action: PayloadAction<TUserInDB[]>) {
      state.usersList = action.payload
    },
    setCurrentUserFromDB(state: TUsersState, action: PayloadAction<TCurrentUser>) {
      state.currentUser = action.payload
    },
  },
})

export const { setIsLoading, setUsersListFromDB, setCurrentUserFromDB } = userSlice.actions

export default userSlice.reducer

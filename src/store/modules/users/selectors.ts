import { TState } from 'store/store'

export const getIsLoading = (state: TState) => state.users.isLoading
export const getUsersList = (state: TState) => state.users.usersList
export const getCurrentUser = (state: TState) => state.users.currentUser

import { TState } from 'store/store'

export const getIsLoading = (state: TState) => state.auth.isLoading
export const getUser = (state: TState) => state.auth.user

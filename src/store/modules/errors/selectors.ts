import { TState } from 'store/store'

export const getError = (state: TState) => state.errors.errorObj

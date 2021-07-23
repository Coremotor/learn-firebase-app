import { TState } from 'store/store'

export const getTheme = (state: TState) => state.theme.theme
export const getActiveTab = (state: TState) => state.theme.activeTab

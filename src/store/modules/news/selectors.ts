import { TState } from 'store/store'

export const getIsLoading = (state: TState) => state.news.isLoading
export const getNewsList = (state: TState) => state.news.newsList

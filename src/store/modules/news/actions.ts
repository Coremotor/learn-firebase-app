import { AppDispatch } from 'store/store'
import { TNewsForm, TNewsInDB } from 'store/modules/news/types'
import { setError } from 'store/modules/errors/reducer'
import { setIsLoading, setNewsListFromDB } from 'store/modules/news/reducer'
import { nanoid } from 'nanoid'
import { DB, timestamp } from 'firebase/config'

export const addNewsInDB = (data: TNewsForm) => {
  return async (dispatch: AppDispatch) => {
    dispatch(setError(null))
    dispatch(setIsLoading(true))
    try {
      await DB.collection('news').add({
        uid: nanoid(),
        title: data.title,
        text: data.text,
        authorName: data.authorName,
        createdAt: timestamp(),
      })

      const querySnapshot = await DB.collection('news').get()
      const newsList: TNewsInDB[] = []
      querySnapshot.forEach((doc) => {
        newsList.push(doc.data() as TNewsInDB)
      })
      dispatch(setNewsListFromDB(newsList))

      dispatch(setIsLoading(false))
    } catch (error) {
      alert(error)
      console.log('addInDBError', error)
      dispatch(setIsLoading(false))
      // dispatch(setError(error.response.data))
    }
  }
}

export const getNewsListFromDB = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(setError(null))
    dispatch(setIsLoading(true))
    try {
      const querySnapshot = await DB.collection('news').orderBy('createdAt', 'desc').get()
      const newsList: TNewsInDB[] = []
      querySnapshot.forEach((doc) => {
        newsList.push(doc.data() as TNewsInDB)
      })
      dispatch(setNewsListFromDB(newsList))
      dispatch(setIsLoading(false))
    } catch (error) {
      alert(error)
      console.log('newsError', error)
      // dispatch(setError(error.response.data))
      dispatch(setIsLoading(false))
    }
  }
}

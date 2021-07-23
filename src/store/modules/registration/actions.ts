import firebase, { DB, timestamp } from 'firebase/config'
import 'firebase/auth'

import { setIsLoading } from 'store/modules/registration/reducer'
import { AppDispatch } from 'store/store'
import { TRegFormValues } from './types'
import { setError } from 'store/modules/errors/reducer'

export const registration = (data: TRegFormValues, goAuthPage: () => void) => {
  return async (dispatch: AppDispatch) => {
    dispatch(setError(null))
    dispatch(setIsLoading(true))
    try {
      await firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
      await addUserInDB(data)
      dispatch(setIsLoading(false))
      goAuthPage()
    } catch (error) {
      alert(error)
      console.log('regError', error)
      // dispatch(setError(error.response.data))
      dispatch(setIsLoading(false))
    }
  }
}

export const addUserInDB = async (data: TRegFormValues) => {
  try {
    await DB.collection('users').add({
      email: data.email,
      createdAt: timestamp(),
    })
  } catch (error) {
    alert(error)
    console.log('addInDBError', error)
    // dispatch(setError(error.response.data))
  }
}

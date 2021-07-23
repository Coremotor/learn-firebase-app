import { setIsLoading, setUser } from 'store/modules/auth/reducer'
import { AppDispatch } from 'store/store'
import { TAuthFormValues } from './types'
import { setError } from 'store/modules/errors/reducer'

import firebase from 'firebase/config'
import 'firebase/auth'

export const authRequest = (data: TAuthFormValues, goHomePage: () => void) => {
  return async (dispatch: AppDispatch) => {
    dispatch(setError(null))
    dispatch(setIsLoading(true))
    try {
      const userCredential = await firebase.auth().signInWithEmailAndPassword(data.email, data.password)
      dispatch(setUser(userCredential.user))
      dispatch(setIsLoading(false))
      goHomePage()
    } catch (error) {
      alert(error)
      console.log('authError', error)
      // dispatch(setError(error.response.data))
      dispatch(setIsLoading(false))
    }
  }
}

export const logout = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(setError(null))
    try {
      await firebase.auth().signOut()
      localStorage.removeItem('persist:root')
      dispatch(setUser(null))
    } catch (error) {
      alert(error)
      console.log('logoutError', error)
      // dispatch(setError(error.response.data))
    }
  }
}

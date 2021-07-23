import { setCurrentUserFromDB, setIsLoading, setUsersListFromDB } from 'store/modules/users/reducer'
import { AppDispatch } from 'store/store'
import { setError } from 'store/modules/errors/reducer'
import { TUserInDB } from 'store/modules/users/types'
import firebase, { DB } from 'firebase/config'
import 'firebase/auth'

export const getUsersListFromDB = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(setError(null))
    dispatch(setIsLoading(true))
    try {
      const querySnapshot = await DB.collection('users').get()
      const usersList: TUserInDB[] = []
      querySnapshot.forEach((doc) => {
        usersList.push(doc.data() as TUserInDB)
      })
      dispatch(setUsersListFromDB(usersList))
      dispatch(setIsLoading(false))
    } catch (error) {
      alert(error)
      console.log('regError', error)
      // dispatch(setError(error.response.data))
      dispatch(setIsLoading(false))
    }
  }
}

export const getCurrentUserFromDB = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(setError(null))
    dispatch(setIsLoading(true))
    try {
      const user = await firebase.auth().currentUser
      if (user) {
        dispatch(setCurrentUserFromDB({ uid: user.uid, email: user.email, displayName: user.displayName }))
      }
      dispatch(setIsLoading(false))
    } catch (error) {
      alert(error)
      console.log('regError', error)
      // dispatch(setError(error.response.data))
      dispatch(setIsLoading(false))
    }
  }
}

export const updateCurrentUser = (name: string, email: string, password: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch(setError(null))
    dispatch(setIsLoading(true))
    try {
      const user = await firebase.auth().currentUser
      if (user) {
        if (name) {
          await user.updateProfile({
            displayName: name,
          })
        }
        if (email) {
          await user.updateEmail(email)
        }
        if (password) {
          await user.updatePassword(password)
        }
      }
      const updatedUser = await firebase.auth().currentUser
      if (updatedUser) {
        dispatch(
          setCurrentUserFromDB({
            uid: updatedUser.uid,
            email: updatedUser.email,
            displayName: updatedUser.displayName,
          }),
        )
      }
      dispatch(setIsLoading(false))
    } catch (error) {
      alert(error)
      console.log('regError', error)
      // dispatch(setError(error.response.data))
      dispatch(setIsLoading(false))
    }
  }
}

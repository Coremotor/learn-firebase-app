import firebase from 'firebase/config'
import Timestamp = firebase.firestore.Timestamp

export type TUsersState = {
  isLoading: boolean
  usersList: TUserInDB[]
  currentUser: TCurrentUser | null
}

export type TUserInDB = {
  email: string
  createdAt: Timestamp
}

export type TCurrentUser = {
  uid: string
  email: string | null
  displayName: string | null
}

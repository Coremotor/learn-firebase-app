import firebase from 'firebase/config'

export type TAuthState = {
  isLoading: boolean
  user: TAuthFirebaseUser | null
}

export type TAuthFormValues = {
  email: string
  password: string
}

export type TAuthFirebaseUser = firebase.User

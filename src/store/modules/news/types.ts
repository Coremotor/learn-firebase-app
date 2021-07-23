import firebase from 'firebase/config'
import Timestamp = firebase.firestore.Timestamp

export type TNewsState = {
  isLoading: boolean
  newsList: TNewsInDB[]
}

export type TNewsInDB = {
  uid: string
  title: string
  authorName: string
  text: string
  createdAt: Timestamp
}

export type TNewsForm = {
  title: string
  authorName: string
  text: string
}

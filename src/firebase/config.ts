import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/analytics'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FB_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FB_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FB_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FB_APP_ID,
}

firebase.initializeApp(firebaseConfig)
firebase.analytics()

const DB = firebase.firestore()
const firebaseStorage = firebase.storage()

const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { timestamp, DB, firebaseStorage }
export default firebase

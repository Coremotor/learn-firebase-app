import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/analytics'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyD6CECstm_yDPNlrHANLhUja7szr0KbM_o',
  authDomain: 'learn-firebase-app-34657.firebaseapp.com',
  projectId: 'learn-firebase-app-34657',
  storageBucket: 'learn-firebase-app-34657.appspot.com',
  messagingSenderId: '669810222194',
  appId: '1:669810222194:web:5f6613b61364c908bdceeb',
}

firebase.initializeApp(firebaseConfig)
firebase.analytics()

const DB = firebase.firestore()
const firebaseStorage = firebase.storage()

const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { timestamp, DB, firebaseStorage }
export default firebase

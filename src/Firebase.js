import firebase from 'firebase'
import { firebaseConfigure } from './config/config'

const firebaseConfig = {
  apiKey: firebaseConfigure.apiKey,
  authDomain: firebaseConfigure.authDomain,
  projectId: firebaseConfigure.projectId,
  storageBucket: firebaseConfigure.storageBucket,
  messagingSenderId: firebaseConfigure.messagingSenderId,
  appId: firebaseConfigure.appId
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }
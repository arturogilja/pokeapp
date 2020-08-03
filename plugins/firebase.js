import firebase from 'firebase/app'
import 'firebase/auth'
import { firebaseConfig } from '../env'
let app = null

app = firebase.apps.length
  ? firebase.app()
  : firebase.initializeApp(firebaseConfig)

export default app

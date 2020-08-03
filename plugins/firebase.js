import firebase from 'firebase/app'
import 'firebase/auth'
let app = null

const firebaseConfig = {
  apiKey: 'AIzaSyDQE1Vs2tskZnIn5aoGmbD4GpvYqgdQN_Y',
  authDomain: 'pokeapp-e622d.firebaseapp.com',
  databaseURL: 'https://pokeapp-e622d.firebaseio.com',
  projectId: 'pokeapp-e622d',
  storageBucket: 'pokeapp-e622d.appspot.com',
  messagingSenderId: '627533252125',
  appId: '1:627533252125:web:208b1b0a6e2902864168f4',
  measurementId: 'G-Z38PRCK0ZP',
}

app = firebase.apps.length
  ? firebase.app()
  : firebase.initializeApp(firebaseConfig)

export default app

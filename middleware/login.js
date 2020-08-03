import firebase from 'firebase/app'
import 'firebase/auth'

export default function ({ store, redirect }) {
  if (firebase.auth().currentUser) {
    console.log('REDIRECT')
    return redirect('/home')
  }
}

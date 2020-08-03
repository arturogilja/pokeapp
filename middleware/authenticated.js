import firebase from 'firebase/app'
import 'firebase/auth'

export default function (context) {
  const { store, redirect } = context
  if (!firebase.auth().currentUser) {
    return redirect('/')
  }
}

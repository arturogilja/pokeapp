import firebase from 'firebase/app'
import 'firebase/auth'

export default (context) => {
  const { store, redirect } = context
  return new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        return resolve(store.commit('auth/LOGIN', user.toJSON()))
      } else {
        return resolve()
      }
    })
  })
}

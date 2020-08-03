<template>
  <form @submit.prevent="login" class="form-box">
    <div class="form-error">{{ error }}</div>
    <div class="form-group">
      <div class="label">Email</div>
      <input type="text" v-model="email" class="input" />
      <div class="validation-message">{{ validationMessages.email }}</div>
    </div>
    <div class="form-group">
      <div class="label">Password</div>
      <input type="password" v-model="password" class="input" />
      <div class="validation-message">{{ validationMessages.password }}</div>
    </div>
    <div class="form-group button-row">
      <button
        :class="{ 'button-disabled': !valid }"
        class="button"
        type="submit"
        :disabled="!valid"
      >Log In</button>
    </div>
  </form>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
import { authValidations } from '../mixins/validations'
export default {
  mixins: [authValidations],
  data() {
    return {}
  },
  created() {
    if (firebase.auth().currentUser) this.$router.push('/home')
  },
  methods: {
    async login() {
      this.error = null
      try {
        const response = await firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
        this.$router.push('/home')
      } catch (error) {
        switch (error.code) {
          case 'auth/user-not-found':
          case 'auth/wrong-password':
            this.error =
              'Incorrect credentials. If you have not yet created an account please go to the register page.'
            break
          case 'auth/user-disabled':
            this.error = 'Your user has been disabled. Sorry :('
            break
          default:
            this.error = 'Unknown error. Please try again later.'
        }
      }
    },
  },
  computed: {
    valid() {
      const valid =
        this.validationMessages.email === '' &&
        this.validationMessages.password === ''
      return valid
    },
  },
}
</script>

<style lang="scss" scoped>
.button-disabled {
  background-color: white;
  &:hover {
    background-color: white;
    cursor: default;
  }
}
</style>

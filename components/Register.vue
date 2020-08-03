<template>
  <form class="form-box">
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
    <div class="form-group">
      <div class="label">Confirm Password</div>
      <input type="password" v-model="confirmPassword" class="input" />
      <div class="validation-message">{{ validationMessages.confirmPassword }}</div>
    </div>
    <div class="form-group button-row">
      <button
        class="button"
        :class="{ 'button-disabled': !valid }"
        type="submit"
        :disabled="!valid"
      >Register</button>
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
  methods: {
    async register() {
      this.error = null
      try {
        const response = await firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
      } catch (error) {
        switch (error.code) {
          case 'auth/email-already-in-use':
            this.error =
              'There is already an account registered with this email.'
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
        this.validationMessages.password === '' &&
        this.validationMessages.confirmPassword === ''
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
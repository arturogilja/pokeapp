export const authValidations = {
  data() {
    return {
      error: null,
      email: '',
      password: '',
      confirmPassword: '',
      validationMessages: {
        email: null,
        password: null,
        confirmPassword: null,
      },
    }
  },

  methods: {
    validateEmail(value) {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        this.validationMessages.email = null
      } else {
        this.validationMessages.email = 'Invalid Email Address'
      }
    },
    validatePassword(value) {
      let difference = 8 - value.length
      if (value.length < 8) {
        this.validationMessages.password = `Must be 8 characters! ${difference} characters left`
      } else {
        this.validationMessages.password = null
      }
    },
    validatePasswordConfirmation(value) {
      let difference = 8 - value.length
      if (value.length < 8) {
        this.validationMessages.confirmPassword = `Must be 8 characters! ${difference} characters left`
      } else if (value !== this.password) {
        this.validationMessages.confirmPassword = 'The passwords do not match'
      } else {
        this.validationMessages.confirmPassword = null
      }
    },
  },

  watch: {
    email(value) {
      this.email = value
      this.validateEmail(value)
    },
    password(value) {
      this.password = value
      this.validatePassword(value)
    },
    confirmPassword(value) {
      this.confirmPassword = value
      this.validatePasswordConfirmation(value)
    },
  },
}

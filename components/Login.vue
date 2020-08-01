<template>
  <div class="form-box">
    <div class="form-group">
      <div class="label">Email</div>
      <input type="text" v-model="email" class="input" />
    </div>
    <div class="form-group">
      <div class="label">Password</div>
      <input type="password" v-model="password" class="input" />
    </div>
    <div class="form-group button-row">
      <button class="button">Log In</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
}
</script>
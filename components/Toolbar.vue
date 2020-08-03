<template>
  <header>
    <div class="welcome">Welcome, {{ $store.state.auth.user.email }}</div>
    <img src="/img/logo.png" alt="Pokemon" />
    <div class="options">
      <nuxt-link to="/home" class="link">Home</nuxt-link>
      <nuxt-link to="/home" class="link">Abilities</nuxt-link>
      <a @click="logout" class="link">Logout</a>
      <ColorModeToggler />
    </div>
  </header>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'

import ColorModeToggler from './ColorModeToggler.vue'

export default {
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then((_) => {
          this.$router.push('/')
        })
    },
  },
}
</script>

<style scoped lang="scss">
header {
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  img {
    height: 60%;
  }

  @include respond(phone) {
    height: 120px;
    flex-direction: column;
  }
}

.link {
  cursor: pointer;
  text-decoration: none;
}

.welcome {
  @include respond(phone) {
    order: 2;
  }
}
</style>
<template>
  <div>
    <nuxt-link to="/home">Dashboard</nuxt-link>
    <div class="wrapper">
      <div class="navigation">
        <button
          class="button nav-button left"
          :class="{ 'button-disabled' : !isLogin }"
          @click="goLogin"
        >Login</button>
        <button
          class="button nav-button right"
          :class="{ 'button-disabled' : isLogin }"
          @click="goRegister"
        >Register</button>
      </div>
      <keep-alive>
        <component class="component" :is="activeComponent" />
      </keep-alive>
    </div>
  </div>
</template>

<script>
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'

export default {
  components: {
    Login,
    Register,
  },
  data() {
    return {
      activeComponent: 'Login',
    }
  },
  beforeMount() {
    this.$colorMode.value = 'light'
    this.$colorMode.preference = 'light'
  },
  methods: {
    goLogin(e) {
      this.activeComponent = 'Login'
    },
    goRegister(e) {
      this.activeComponent = 'register'
    },
  },
  computed: {
    isLogin() {
      return this.activeComponent === 'Login'
    },
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 100vh;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.navigation {
  display: inline-flex;
  width: $landing-width;
  max-width: $max-landing-width;
}

.nav-button {
  width: 50%;
  height: 3rem;
  border: 2px solid var(--button-bg);
}

.left {
  border-top-left-radius: $box-radius;
}

.right {
  border-top-right-radius: $box-radius;
}

.component {
  border: 2px solid var(--button-bg);
  border-top: none;
  height: 400px;
  border-bottom-left-radius: $box-radius;
  border-bottom-right-radius: $box-radius;
}
</style>

<template>
  <button class="button" @click="toggleColor">{{ mode }}</button>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    mode() {
      return this.$colorMode.value === 'light' ? 'Dark Mode' : 'Light Mode'
    },
  },
  methods: {
    toggleColor(e) {
      const newColor = this.$colorMode.value === 'light' ? 'dark' : 'light'
      this.$colorMode.preference = newColor
      this.$store.commit('color/SET_COLOR_PREFERENCE', newColor)
    },
  },
}
</script>

<style lang="scss">
</style>

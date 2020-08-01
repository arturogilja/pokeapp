<template>
  <button @click="toggleColor">{{ mode }}</button>
</template>

<script>
export default {
  computed: {
    mode() {
      return this.$colorMode.value === 'light' ? 'Dark mode' : 'Light Mode'
    },
  },
  methods: {
    toggleColor(e) {
      const newColor = this.$colorMode.value === 'light' ? 'dark' : 'light'
      this.$colorMode.preference = newColor
      this.$colorMode.value = newColor

      this.$store.commit(
        'color/SET_COLOR_PREFERENCE',
        this.$colorMode.value === 'light' ? 'dark' : 'light'
      )
    },
  },
}
</script>

<style lang="scss"></style>

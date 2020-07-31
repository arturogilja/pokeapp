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
      this.$colorMode.preference =
        this.$colorMode.value === 'light' ? 'dark' : 'light'
    },
  },
}
</script>

<style lang="scss"></style>

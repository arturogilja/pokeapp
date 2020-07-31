<template>
  <div class="col-1-of-3 card">
    <img
      :src="`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`"
      :alt="pokemon.name"
    />
  </div>
</template>

<script>
export default {
  props: ['pokemon'],
}
</script>

<style scoped lang="scss">
.card {
  background-color: var(--bg-secondary);

  img {
    width: 40%;
  }
}
</style>

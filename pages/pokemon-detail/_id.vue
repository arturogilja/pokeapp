<template>
  <div>{{pokemon}}</div>
</template>

<script>
import { getPokemonById } from '../../services/pokemonService'
export default {
  layout: 'dashboard',
  data() {
    return {
      pokemon: null,
    }
  },
  async beforeMount() {
    const name = this.$route.params.id
    try {
      const pokemon = await getPokemonById(name)
      this.pokemon = pokemon.data
    } catch (error) {
      this.$router.push('/home')
    }
  },
}
</script>

<style lang="scss" scoped>
</style>

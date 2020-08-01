<template>
  <div>
    <color-mode-toggler />
    <nuxt-link to="/">Index</nuxt-link>
    <div class="row">
      <div class="col-3-of-4">
        <spinner v-if="$store.state.pokemon.loading" />
        <div class="row" v-for="pokemons in rows" :key="pokemons[0].id">
          <card
            v-for="pokemon in pokemons"
            :key="pokemon.id"
            :pokemon="pokemon"
          />
        </div>
      </div>
      <div class="col-1-of-4">ABC</div>
    </div>
  </div>
</template>

<script>
import ColorModeToggler from '../components/ColorModeToggler.vue'
import Card from '../components/Card.vue'
import Spinner from '../components/Spinner.vue'
import {
  getAllPokemon,
  getPokemonById,
  getPokemonDescription,
} from '../services/pokemonService'

export default {
  components: {
    ColorModeToggler,
    Spinner,
    Card,
  },
  layout: 'dashboard',
  data() {
    return {}
  },
  // Se puede usar asyncData para inflar el estado del lado del servidor, o bien a la hora de hacer el build.
  // En este caso no se hizo uso de la funcionalidad para demostrar el funcionamiento del loader, por lo que las peticiones se hacen desde el hook created().
  // De igual forma se muestra en el siguiente fragmento comentado como se haría esta funcionalidad utilizando asyncData.

  // async asyncData({ store }) {
  //   const { data } = await getAllPokemon()
  //   const promises = data.results.map((pokemon) => getPokemonById(pokemon.name))
  //   try {
  //     const responses = await Promise.all(promises)
  //     const pokemons = responses.map((response) => response.data)
  //     store.commit('pokemon/SET_POKEMONS', pokemons)
  //   } catch (error) {
  //     store.commit('pokemon/SET_ERROR', 'Ha habido un error en el servidor.')
  //   }
  // },

  async created() {
    //Setear esquema de color
    if (this.$store.state.color.colorPreference) {
      this.$colorMode.value = this.$store.state.color.colorPreference
    }

    this.$store.commit('pokemon/SET_POKEMONS', [])
    this.$store.commit('pokemon/SET_LOADING', true)
    const { data } = await getAllPokemon()
    const promisesPokemonData = data.results.map((pokemon) =>
      getPokemonById(pokemon.name)
    )
    const promisesPokemonDescription = data.results.map((pokemon) =>
      getPokemonDescription(pokemon.name)
    )
    try {
      const responsesPokemon = await Promise.all(promisesPokemonData)
      const responsesDescriptions = await Promise.all(
        promisesPokemonDescription
      )

      const pokemons = responsesPokemon.map((response) => response.data)
      const descriptions = responsesDescriptions.map(
        (response) => response.data
      )

      const pokemonsFull = pokemons.map((pokemon, i) => ({
        ...pokemon,
        description: descriptions[i],
      }))
      this.$store.commit('pokemon/SET_POKEMONS', pokemonsFull)
    } catch (error) {
      this.$store.commit(
        'pokemon/SET_ERROR',
        'Ha habido un error en el servidor.'
      )
    }
  },

  computed: {
    pokemons() {
      return this.$store.state.pokemon.allPokemons
    },
    rows() {
      return this.chunk(this.$store.state.pokemon.allPokemons, 3)
    },
  },

  methods: {
    chunk(arr, size) {
      arr = [...arr]
      return new Array(Math.ceil(arr.length / size))
        .fill()
        .map((_) => arr.splice(0, size))
    },
  },
}
</script>

<style lang="scss" scoped></style>

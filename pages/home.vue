<template>
  <div>
    <div class="selector-container">
      <select
        class="button select"
        v-model="currentType"
        @change="requestPokemonsFromType(currentType)"
      >
        <option
          class="button"
          v-for="(type, i) in types"
          :value="type.name"
          :key="i"
        >{{ type.name }}</option>
      </select>
    </div>
    <div class="row">
      <div class="col-3-of-4">
        <div class="spinner">
          <spinner v-if="$store.state.pokemon.loading" />
        </div>

        <div class="row" v-show="rows.length !== 0" v-for="pokemons in rows" :key="pokemons[0].id">
          <card v-for="pokemon in pokemons" :key="pokemon.id" :pokemon="pokemon" />
        </div>
        <div
          class="message"
          v-show="rows.length === 0 && !$store.state.pokemon.loading"
        >There are no pokemons</div>
      </div>
      <div class="col-1-of-4">
        <selected-pokemons />
      </div>
    </div>
  </div>
</template>

<script>
import ColorModeToggler from '../components/ColorModeToggler.vue'

import Card from '../components/Card.vue'
import Spinner from '../components/Spinner.vue'
import SelectedPokemons from '../components/SelectedPokemons.vue'
import {
  getAllPokemon,
  getPokemonById,
  getPokemonDescription,
  getAllPokemonTypes,
  getPokemonTypeById,
} from '../services/pokemonService'

export default {
  components: {
    ColorModeToggler,
    Spinner,
    Card,
    SelectedPokemons,
  },
  layout: 'dashboard',
  data() {
    return {
      types: [],
      currentType: '',
    }
  },
  middleware: 'authenticated',
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
    if (this.$store.state.color.colorPreference !== null) {
      this.$colorMode.preference = this.$store.state.color.colorPreference
    }

    this.$store.commit('pokemon/SET_POKEMONS', [])
    this.$store.commit('pokemon/SET_LOADING', true)

    const { data } = await getAllPokemonTypes()
    console.log(data)
    this.types = data.results
    this.currentType = this.types[0].name
    await this.requestPokemonsFromType(this.currentType)
  },

  computed: {
    rows() {
      return this.chunk(
        this.$store.state.pokemon.allPokemons.filter(
          (pokemon) => !pokemon.selected
        ),
        3
      )
    },
  },

  methods: {
    chunk(arr, size) {
      arr = [...arr]
      return new Array(Math.ceil(arr.length / size))
        .fill()
        .map((_) => arr.splice(0, size))
    },
    async requestPokemonsFromType(id) {
      this.$store.commit('pokemon/SET_POKEMONS', [])
      this.$store.commit('pokemon/SET_LOADING', true)
      try {
        const responseType = await getPokemonTypeById(id)
        const pokemonList = responseType.data.pokemon.splice(0, 6)
        const promisesPokemonData = pokemonList.map((pokemon) =>
          getPokemonById(pokemon.pokemon.name)
        )
        const promisesPokemonDescription = pokemonList.map((pokemon) =>
          getPokemonDescription(pokemon.pokemon.name)
        )

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
          selected: false,
        }))
        this.$store.commit('pokemon/SET_POKEMONS', pokemonsFull)
      } catch (error) {
        console.log(error)
        this.$store.commit(
          'pokemon/SET_ERROR',
          'Ha habido un error en el servidor.'
        )
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.selector-container {
  text-align: center;
  margin: 1rem;
}
.select {
  height: unset;
  padding: 5px;
  text-transform: capitalize;
}

.spinner {
  display: flex;
  justify-content: center;
}

.message {
  text-align: center;
}
</style>

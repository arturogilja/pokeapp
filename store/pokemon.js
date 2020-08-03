export const state = () => ({
  allPokemons: [],
  loading: false,
  error: null,
  selected: [],
})

export const mutations = {
  SET_POKEMONS(state, pokemons) {
    state.allPokemons = pokemons
    state.loading = false
  },
  SET_ERROR(state, error) {
    state.error = error
    state.loading = false
  },
  SET_LOADING(state, loading) {
    state.loading = loading
  },
  REFRESH_ALL(state) {
    state.allPokemons.forEach((pokemon) => (pokemon.selected = false))
  },
  ADD_TO_SELECTED(state, pokemon) {
    state.allPokemons.find((p) => p.name === pokemon.name).selected = true
    state.selected.push(pokemon)
  },
  REMOVE_FROM_SELECTED(state, { id, index }) {
    state.selected.splice(index, 1)
    state.allPokemons.find((p) => p.id === id).selected = false
  },
  CLEAR_SELECTED(state) {
    state.allPokemons.forEach((pokemon) => (pokemon.selected = false))
    state.selected = []
  },
}

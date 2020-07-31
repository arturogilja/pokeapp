export const state = () => ({
  allPokemons: [],
  loading: false,
  error: null,
})

export const mutations = {
  SET_POKEMONS(state, pokemons) {
    state.allPokemons = pokemons
    state.loading = false
    state.loading = null
  },
  SET_ERROR(state, error) {
    state.error = error
    state.loading = false
  },
  SET_LOADING(state, loading) {
    state.loading = loading
  },
}

export const state = () => ({
  user: null,
})

export const mutations = {
  LOGIN(state, user) {
    state.user = user
  },

  CLEAN_USER(state) {
    state.user = null
  },
}

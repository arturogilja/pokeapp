export const state = () => ({
  colorPreference: null,
})

export const mutations = {
  SET_COLOR_PREFERENCE(state, colorPreference) {
    state.colorPreference = colorPreference
  },
}

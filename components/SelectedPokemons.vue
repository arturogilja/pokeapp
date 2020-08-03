<template>
  <div>
    <div class="title">Selected Pokemon</div>
    <div class="selected">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Ability</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr class="item" v-for="(pokemon, i) in $store.state.pokemon.selected" :key="i">
            <nuxt-link :to="`/pokemon-detail/${pokemon.name}`" class="text name">{{ pokemon.name }}</nuxt-link>
            <td class="text">{{ pokemon.ability }}</td>
            <div class="action" @click="remove(pokemon.id, i)">Remove</div>
          </tr>
        </tbody>
      </table>
    </div>
    <button class="button" @click="refresh">Refresh Pokemon List</button>
    <button class="button" @click="clear">Remove All</button>
  </div>
</template>

<script>
export default {
  methods: {
    remove(id, index) {
      this.$store.commit('pokemon/REMOVE_FROM_SELECTED', { index, id })
    },
    refresh() {
      this.$store.commit('pokemon/REFRESH_ALL')
    },
    clear() {
      this.$store.commit('pokemon/CLEAR_SELECTED')
    },
  },
}
</script>

<style lang="scss" scoped>
.title {
  text-align: center;
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

a {
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}

.name {
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
}

.action {
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
}

table {
  width: 100%;
}

th {
  text-align: left;
}

.item {
  height: 1.5rem;

  &:hover {
    background-color: var(--bg-secondary);
  }
}

.button {
  width: 100%;
  margin-top: 5px;
}

.text {
  text-transform: capitalize;
}
</style>
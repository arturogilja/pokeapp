<template>
  <div class="col-1-of-3">
    <div class="card">
      <div class="left">
        <div class="img-container">
          <img
            :src="`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`"
            :alt="pokemon.name"
          />
        </div>
      </div>
      <div class="right">
        <div class="name">{{ pokemon.name }}</div>
        <div class="title">Description</div>
        <div class="text">{{ pokemon.description.flavor_text_entries[0].flavor_text }}</div>
        <div class="title">Ability</div>
        <div class="text">{{ pokemon.abilities[0].ability.name }}</div>
        <div class="title">Types</div>
        <div class="text">
          <ul>
            <li v-for="(type, i) in pokemon.types" :key="i">{{ type.type.name }}</li>
          </ul>
        </div>
        <div class="buttons">
          <button class="button" @click="addToSelected(pokemon)">Select</button>
          <nuxt-link :to="`/pokemon-detail/${pokemon.name}`">More Info</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['pokemon'],
  methods: {
    addToSelected(pokemon) {
      const data = {
        id: pokemon.id,
        name: pokemon.name,
        ability: pokemon.abilities[0].ability.name,
      }
      this.$store.commit('pokemon/ADD_TO_SELECTED', data)
    },
  },
}
</script>

<style scoped lang="scss">
$text-padding: 0.5rem;

a {
  text-decoration: none;
}
.card {
  background-color: var(--bg-secondary);
  border: 1px solid var(--color-secondary);
  display: flex;
  border-radius: 0.8rem;
  min-height: 300px;
  padding: 5px;

  .name {
    text-transform: capitalize;
    font-size: 1.3rem;
    font-weight: bold;
  }

  .left {
    width: 40%;
    height: auto;
    padding: 10px;
    display: flex;
    justify-content: center;

    .img-container {
      width: 100%;

      img {
        position: relative;
        width: 100%;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }

  .right {
    width: 60%;
    padding: 3px;

    .title {
      font-size: 0.9rem;
      padding-top: 0.5rem;
    }

    .text {
      text-transform: capitalize;
      font-size: 0.85rem;
      font-weight: lighter;
      padding: $text-padding;

      ul {
        padding: 0;
        list-style-type: none;
      }
    }
  }
}
</style>

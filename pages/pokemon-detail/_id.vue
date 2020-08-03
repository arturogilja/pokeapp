<template>
  <section>
    <div class="name">
      <h1>{{ pokemon.name }}</h1>
    </div>
    <div class="container">
      <div class="img-container">
        <img
          :src="`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`"
          :alt="pokemon.name"
        />
      </div>
      <div class="detail">
        <div class="title">Abilities</div>
        <div class="text">
          <ul>
            <li v-for="(ability, i) in pokemon.abilities" :key="i">
              {{ ability.ability.name }}
            </li>
          </ul>
        </div>
        <div class="title">Base experience</div>
        <div class="text">{{ pokemon.base_experience }}</div>
        <div class="title">Moves</div>
        <div class="text">{{ moves }}</div>
        <div class="title">Types</div>
        <div class="text">
          <ul>
            <li v-for="(type, i) in pokemon.types" :key="i">
              {{ type.type.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { getPokemonById } from '../../services/pokemonService'
export default {
  layout(context) {
    return 'dashboard'
  },
  middleware: 'authenticated',
  data() {
    return {
      pokemon: {},
    }
  },
  computed: {
    moves() {
      if (this.pokemon.moves)
        return this.pokemon.moves.map((move) => move.move.name).join(', ')
    },
  },
  head() {
    return {
      title: 'Pokeapp - Pokemon Detail',
    }
  },
  async beforeCreate() {
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
.name {
  text-align: center;
  font-weight: bold;
  font-size: 1.6rem;
  text-transform: capitalize;
  margin: 1rem 0;
}

.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;

  @include respond(phone) {
    flex-direction: column;
  }

  .img-container {
    width: 40%;
    text-align: center;

    @include respond(phone) {
      width: 100%;
    }

    img {
      width: 100%;

      @include respond(phone) {
        width: 80%;
      }
    }
  }

  .detail {
    width: 60%;
    padding: 16px;
    text-transform: capitalize;

    @include respond(phone) {
      width: 100%;
    }
  }

  ul {
    padding: 0;
    list-style-type: none;
  }

  .title {
    font-size: 1.2rem;
    font-weight: 600;
    margin: 0.7rem 0 0.5rem;
  }
}
</style>

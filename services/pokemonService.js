import axios from 'axios'

export async function getAllPokemon() {
  return await axios.get('https://pokeapi.co/api/v2/pokemon?limit=12')
}

export async function getPokemonById(id) {
  return await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
}

export async function getPokemonDescription(id) {
  return await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
}

export async function getAllPokemonTypes() {
  return await axios.get(`https://pokeapi.co/api/v2/type/`)
}

export async function getPokemonTypeById(id) {
  return await axios.get(`https://pokeapi.co/api/v2/type/${id}`)
}

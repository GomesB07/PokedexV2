import api from "./api"

export const getAllPokemonsUrl = async ({
  limitPokemonPage,
  pokemonNumber,
}) => {
  const {
    data: { results },
  } = await api.get(`pokemon?limit=${limitPokemonPage}&offset=${pokemonNumber}`)
  const urls = results.map((url) => api.get(url.url))
  const promise = await Promise.all(urls)
  const getData = promise.map((data) => data.data)
  return getData
}

export const getPokemons = async (pokemons) => {
  const data = await pokemons.map((pokemon) => api.get(`pokemon/${pokemon}`))
  const promise = await Promise.all(data)
  const getData = promise.map((data) => data.data)
  return getData
}

export const getPokemon = async (pokemonName) => {
  const { data } = await api.get(`pokemon/${pokemonName}`)
  return data
}

export const getElements = async (element) => {
  if (typeof element === "number") {
    const elementsArray = []
    for (let i = 1; i < element; i++) {
      const { data } = await api.get(`type/${i}`)
      elementsArray.push(data)
    }
    return elementsArray
  }
  return await api.get(`type/${element}`)
}

export const getSpecies = async (url) => {
  const data = await api.get(url)
  return data
}

export const getEvolutions = async (url) => {
  const { data } = await api.get(url)
  return data
}

export const getVarietiesPokemon = async (pokemon) => {
  if (pokemon) {
    const data = await api.get(pokemon.species.url)
    const pokemonVarieties = data.data.varieties
    const urlPokemons = pokemonVarieties.map((pokemon) => pokemon.pokemon.url)
    const fetchPokemon = await urlPokemons.map((url) => api.get(url))
    const promise = await Promise.all(fetchPokemon)
    const dataPokemons = promise.map((pokemon) => pokemon.data)
    return dataPokemons
  }
}

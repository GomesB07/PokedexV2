import { createContext, useEffect, useState } from "react"

export const FavoriteContext = createContext()

const FavoriteProvider = ({ children }) => {
  const [pokemonsLocal, setPokemonsLocal] = useState([])
  const [favoritePokemon, setFavoritePokemon] = useState(false)

  useEffect(() => {
    const pokemonsStorage = localStorage.getItem("pokedex:pokemons")
    pokemonsStorage && setPokemonsLocal(JSON.parse(pokemonsStorage))
  }, [])

  const addLocalStorage = async (pokemon) => {
    if (pokemonsLocal.some((poke) => poke.id === pokemon.id)) {
      ReviewLocalList(pokemon.name)
      const newPokemons = [...pokemonsLocal]
      const removePokemon = newPokemons.filter((poke) => poke.id !== pokemon.id)
      setPokemonsLocal(removePokemon)
      return localStorage.setItem(
        "pokedex:pokemons",
        JSON.stringify(removePokemon),
      )
    }

    setPokemonsLocal([...pokemonsLocal, pokemon])
    const newPokemons = [...pokemonsLocal]
    newPokemons.push(pokemon)

    return localStorage.setItem("pokedex:pokemons", JSON.stringify(newPokemons))
  }

  const ReviewLocalList = (pokemonName) => {
    const list = localStorage.getItem("pokedex:pokemons")
    const objectPokemons = JSON.parse(list)

    if (objectPokemons !== null) {
      const namePokemons = objectPokemons.map((pokemon) => pokemon.name)

      return namePokemons.some((poke) => poke === pokemonName)
        ? setFavoritePokemon(true)
        : setFavoritePokemon(false)
    }
  }

  const getLocalStorage = async () => {
    const getPokemonsLocal = await localStorage.getItem("pokedex:pokemons")
    return JSON.parse(getPokemonsLocal)
  }

  return (
    <FavoriteContext.Provider
      value={{
        addLocalStorage,
        ReviewLocalList,
        favoritePokemon,
        getLocalStorage,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  )
}

export default FavoriteProvider

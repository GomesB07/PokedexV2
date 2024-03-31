import React, { createContext, useEffect, useState } from "react"

import { getAllPokemonsUrl } from "../services/getData"

export const AllPokemonsContext = createContext()

const AllPokemonsProvider = ({ children }) => {
  const [allPokemons, setAllPokemons] = useState([])

  useEffect(() => {
    try {
      const getPokemons = async () => {
        const data = await getAllPokemonsUrl({
          limitPokemonPage: 10000,
          pokemonNumber: 0,
        })

        setAllPokemons(data)
      }

      getPokemons()
    } catch (error) {
      console.error(error)
    }
  }, [])

  return (
    <AllPokemonsContext.Provider value={{ allPokemons }}>
      {children}
    </AllPokemonsContext.Provider>
  )
}

export default AllPokemonsProvider

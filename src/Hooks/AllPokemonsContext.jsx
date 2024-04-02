import React, { createContext, useEffect, useState } from "react"

import { getAllPokemonsUrl } from "../services/getData"

export const AllPokemonsContext = createContext()

const AllPokemonsProvider = ({ children }) => {
  const [allPokemons, setAllPokemons] = useState([])

  useEffect(() => {
    try {
      const getPokemons = async () => {
        const limitPokemonPage = 1302
        const data = await getAllPokemonsUrl({
          limitPokemonPage,
          pokemonNumber: 0,
        })

        setAllPokemons(data)
      }
      setTimeout(() => {
        getPokemons()
      }, 1000)
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

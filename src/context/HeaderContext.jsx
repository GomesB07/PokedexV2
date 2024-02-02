import { createContext, useState } from "react"

export const PokemonColorContext = createContext()

const PokemonProvider = ({ children }) => {
  const [pokemonColor, setPokemonColor] = useState()

  return (
    <PokemonColorContext.Provider value={{ pokemonColor, setPokemonColor }}>
      {children}
    </PokemonColorContext.Provider>
  )
}

export default PokemonProvider

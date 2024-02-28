import { createContext, useState } from "react"

export const ColorPokemonContext = createContext()

const ColorPokemonProvider = ({ children }) => {
  const [pokemonColor, setPokemonColor] = useState()

  return (
    <ColorPokemonContext.Provider value={{ pokemonColor, setPokemonColor }}>
      {children}
    </ColorPokemonContext.Provider>
  )
}

export default ColorPokemonProvider

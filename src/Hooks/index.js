import AllPokemonsProvider from "./AllPokemonsContext"
import ColorPokemonProvider from "./ColorContext"
import FavoritePokemonProvider from "./FavoriteContext"

const AppProvider = ({ children }) => {
  return (
    <ColorPokemonProvider>
      <AllPokemonsProvider>
        <FavoritePokemonProvider>{children}</FavoritePokemonProvider>
      </AllPokemonsProvider>
    </ColorPokemonProvider>
  )
}

export default AppProvider

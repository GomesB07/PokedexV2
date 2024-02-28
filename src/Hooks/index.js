import ColorPokemonProvider from "./ColorContext"
import FavoritePokemonProvider from "./FavoriteContext"

const AppProvider = ({ children }) => {
  return (
    <ColorPokemonProvider>
      <FavoritePokemonProvider>{children}</FavoritePokemonProvider>
    </ColorPokemonProvider>
  )
}

export default AppProvider

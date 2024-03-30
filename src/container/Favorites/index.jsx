import React, { useContext, useEffect, useState } from "react"

import { CardPokemon } from "../../components/CardPokemon"
import { FavoriteContext } from "../../Hooks/FavoriteContext"
import { Container, FavoritesPokemons } from "./styles"

const Favorites = () => {
  const { getLocalStorage } = useContext(FavoriteContext)
  const [pokemons, setPokemons] = useState()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchFavoritePokemons = async () => {
      const getLocal = await getLocalStorage()
      setPokemons(getLocal)
      setIsLoading(true)
    }
    fetchFavoritePokemons()
  }, [])
  return (
    <Container>
      <div className="title">
        <h1>Favorites</h1>
      </div>
      <FavoritesPokemons>
        {pokemons && <CardPokemon pokemons={pokemons} isLoading={isLoading} />}
      </FavoritesPokemons>
    </Container>
  )
}

export default Favorites

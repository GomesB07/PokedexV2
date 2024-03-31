import React, { useContext, useEffect, useState } from "react"

import { Error } from "../../components"
import { CardPokemon } from "../../components/CardPokemon"
import { FavoriteContext } from "../../Hooks/FavoriteContext"
import { Container, FavoritesPokemons } from "./styles"

const Favorites = () => {
  const { getLocalStorage } = useContext(FavoriteContext)
  const [pokemons, setPokemons] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    try {
      const fetchFavoritePokemons = async () => {
        const getLocal = await getLocalStorage()
        setPokemons(getLocal)
        setIsLoading(true)
      }
      fetchFavoritePokemons()
    } catch (error) {
      console.error(error)
      setError(true)
    }
  }, [])
  return (
    <Container>
      <div className="title">
        <h1>Favorites</h1>
      </div>
      <FavoritesPokemons>
        {error ? (
          <Error />
        ) : pokemons ? (
          <CardPokemon pokemons={pokemons} isLoading={isLoading} />
        ) : (
          <p>Sem Pokemons Favoritos!</p>
        )}
      </FavoritesPokemons>
    </Container>
  )
}

export default Favorites

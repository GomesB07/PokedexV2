import React, { useContext, useEffect, useState } from "react"

import { Error } from "../../components"
import { CardPokemon } from "../../components/CardPokemon"
import { FavoriteContext } from "../../Hooks/FavoriteContext"
import { Container, FavoritesPokemons } from "./styles"

const Favorites = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const { getLocalStorage } = useContext(FavoriteContext)
  const [pokemons, setPokemons] = useState()

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
      <FavoritesPokemons>
        {error ? (
          <Error />
        ) : pokemons ? (
          <>
            <div className="title">
              <h1>Favorites</h1>
            </div>
            <CardPokemon pokemons={pokemons} isLoading={isLoading} />
          </>
        ) : (
          <p>Sem Pokemons Favoritos!</p>
        )}
      </FavoritesPokemons>
    </Container>
  )
}

export default Favorites

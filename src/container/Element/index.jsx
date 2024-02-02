import React, { useEffect, useState } from "react"

import { useParams } from "react-router-dom"
import { getElements, getPokemons } from "../../services/getData"

import { CardPokemon, Error } from "../../components"

const Element = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [urlPokemons, setUrlPokemons] = useState()
  const [pokemons, setPokemons] = useState()
  const [isError, setIsError] = useState()
  const { element } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getElements(element)
        setUrlPokemons(data.pokemon.map((pokemon) => pokemon.pokemon.url))
        setIsLoading(true)
      } catch (err) {
        console.error(err)
        setIsError(true)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    const fetchPokemons = async () => {
      const data = await getPokemons(urlPokemons)
      setPokemons(data)
    }

    fetchPokemons()
  }, [urlPokemons])

  return (
    <div>
      {isError ? (
        <Error />
      ) : (
        <div style={{ paddingTop: "10vh" }}>
          {pokemons && (
            <CardPokemon pokemons={pokemons} isLoading={isLoading} />
          )}
        </div>
      )}
    </div>
  )
}

export default Element

import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { CardPokemon, Error, TypesPokemon } from "../../components"
import { getElements, getPokemons } from "../../services/getData"
import { Container } from "./styles"

const Element = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [urlPokemons, setUrlPokemons] = useState([])
  const [pokemons, setPokemons] = useState([])
  const [isError, setIsError] = useState(false)
  const { element } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getElements(element)
        console.log(data)
        setUrlPokemons(data)
        setIsLoading(true)
      } catch (err) {
        console.error(err)
        setIsError(true)
      }
    }

    fetchData()
  }, [])

  // useEffect(() => {
  //   const fetchPokemons = async () => {
  //     const data = await getPokemons(urlPokemons)
  //     setPokemons(data)
  //   }

  //   fetchPokemons()
  // }, [urlPokemons])

  return (
    <Container>
      {isError ? (
        <Error />
      ) : (
        <div>
          <TypesPokemon types={element} isLoading={isLoading} />
        </div>
      )}
    </Container>
  )
}

export default Element

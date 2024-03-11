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
  const [type, setType] = useState()
  const { element } = useParams()

  useEffect(() => {
    try {
      const fetchData = async () => {
        const { data } = await getElements(element)
        setType(data)
        setUrlPokemons(data)
        setIsLoading(true)
      }

      fetchData()
    } catch (err) {
      console.error(err)
      setIsError(true)
    }
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
          <TypesPokemon types={type} isLoading={isLoading} />
        </div>
      )}
    </Container>
  )
}

export default Element

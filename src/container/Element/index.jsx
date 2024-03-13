import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { CardPokemon, Error, TypesPokemon } from "../../components"
import { getElements, getPokemons } from "../../services/getData"
import { Container } from "./styles"

const Element = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [type, setType] = useState()
  const { element } = useParams()

  useEffect(() => {
    try {
      const fetchData = async () => {
        const { data } = await getElements(element)
        setType([data])
        setIsLoading(true)
      }

      fetchData()
    } catch (err) {
      console.error(err)
      setIsError(true)
    }
  }, [])

  return (
    <Container>
      {isError ? (
        <Error />
      ) : (
        <div style={{ backgroundColor: "red", paddingTop: "100px" }}>
          <TypesPokemon types={type} isLoading={isLoading} />
          <h2>Alooo</h2>
        </div>
      )}
    </Container>
  )
}

export default Element

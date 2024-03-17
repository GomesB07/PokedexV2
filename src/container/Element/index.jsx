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

  if (type) {
    // console.log(type[0].damage_relations.map((damage) => console.log(damage)))
    console.log(
      type[0].damage_relations.no_damage_to.map((damage) =>
        console.log(damage),
      ),
    )
  }

  return (
    <Container>
      {isError ? (
        <Error />
      ) : (
        type && (
          <div className="sub-container">
            <div className="div-element">
              <TypesPokemon types={type} isLoading={isLoading} elementPage />
            </div>

            <div className="div-damage">
              {/* {type &&
                type[0].damage_relations.map((damage) => (
                  <p key={Math.random()}>{damage}</p>
                ))} */}
            </div>
          </div>
        )
      )}
    </Container>
  )
}

export default Element

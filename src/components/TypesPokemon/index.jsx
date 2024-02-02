import React from "react"

import { Container, Type } from "./styles"
import { useNavigate } from "react-router-dom"
import { Skelet } from "../index"
import ColorStyles from "../../styles/ColorStyles"

export const TypesPokemon = ({ types, pagElements, isLoading }) => {
  const navigate = useNavigate()

  const goPageElement = (type) => {
    navigate(`/element/${type.name || type.type.name}`)
  }

  return (
    <Container pagElements={pagElements}>
      {types &&
        types.map((type) =>
          isLoading ? (
            <Type
              pagElements={pagElements}
              key={type.name || type.type.name}
              color={ColorStyles(type.name || type.type.name)}
              onClick={() => goPageElement(type)}
            >
              <h2>{type.name || type.type.name}</h2>
            </Type>
          ) : (
            <Skelet
              height={pagElements ? "150px" : "80px"}
              width={pagElements ? "250px" : "100px"}
              key={type.id}
            />
          ),
        )}
    </Container>
  )
}

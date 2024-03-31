import React from "react"
import { useLocation, useNavigate } from "react-router-dom"

import ColorStyles from "../../styles/ColorStyles"
import { Skelet } from "../index"
import { Container, Type } from "./styles"

export const TypesPokemon = (props) => {
  const navigate = useNavigate()
  const location = useLocation()

  const types = props.types
  const elementsPage = props.elementsPage
  const elementPage = props.elementPage
  const isLoading = props.isLoading

  const goPageElement = (type) => {
    if (location.pathname.includes(`/element/${type.name || type.type.name}`)) {
      return
    }
    navigate(`/element/${type.name || type.type.name}`)
  }

  return (
    <Container elementsPage={elementsPage} elementPage={elementPage}>
      <div className="sub-container">
        {types &&
          types.map((type) =>
            isLoading ? (
              <Type
                elementsPage={elementsPage}
                elementPage={elementPage}
                key={type.name || type.type.name}
                color={ColorStyles(type.name || type.type.name)}
                onClick={() => goPageElement(type)}
              >
                <h2>{type.name || type.type.name}</h2>
              </Type>
            ) : (
              <Skelet
                height={elementsPage ? "150px" : "80px"}
                width={elementsPage ? "250px" : "100px"}
                key={type.id}
              />
            ),
          )}
      </div>
    </Container>
  )
}

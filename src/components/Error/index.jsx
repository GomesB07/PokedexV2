import React from "react"
import { useNavigate } from "react-router-dom"

import errorPokeball from "../../img/erro-pokeball.png"
import { Container } from "./styles"

export const Error = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <img src={errorPokeball} />
      <h1>Ops, não conseguimos capturar a requisição!</h1>

      <div className="buttons">
        <button onClick={() => window.location.reload()}>Recarregar</button>
        <button
          onClick={() => navigate("/")}
          style={{ textDecoration: "none", marginTop: "10px" }}
        >
          Voltar para página inicial
        </button>
      </div>
    </Container>
  )
}

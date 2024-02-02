import React from "react"

import snorlax from "../../img/snorlax.gif"

import { useNavigate } from "react-router-dom"

import { Container, GoHome } from "./styles"

export const Error = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <h1>Snorlax não conseguiu encontrar a requisição!</h1>
      <img style={{ "mix-blend-mode": "multiply" }} src={snorlax} />

      <button onClick={() => window.location.reload()}>Recarregar</button>
      <GoHome
        onClick={() => navigate("/")}
        style={{ textDecoration: "none", marginTop: "10px" }}
      >
        Voltar para página inicial
      </GoHome>
    </Container>
  )
}

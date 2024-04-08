import React from "react"
import { useNavigate } from "react-router-dom"

import { Container } from "./styles"

const Home = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <div>
        <h1>Welcome to the incredible world of Pokémon!</h1>
        <p>Here you will find and be able to capture any type of Pokémon</p>
      </div>

      <button onClick={() => navigate("/pokemons")}>Start adventure!</button>
    </Container>
  )
}

export default Home

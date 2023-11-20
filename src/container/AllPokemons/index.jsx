import React, { useEffect, useState } from "react"

import { Container } from "./styles"

import { allPokemons } from "../../services/getData"

const AllPokemons = () => {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    const results = async () => {
      const result = await allPokemons()
      setPokemons(result.data.results)
    }

    results()
  }, [])

  console.log(pokemons)

  return (
    <Container>
      {pokemons && pokemons.map((poke) => <p key={poke.id}>{poke.name}</p>)}
    </Container>
  )
}

export default AllPokemons

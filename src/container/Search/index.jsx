import React, { useContext, useState } from "react"

import { CardPokemon } from "../../components"
import { AllPokemonsContext } from "../../Hooks/AllPokemonsContext"
import { Container, DivInput, LoadingPokemons } from "./styles"

const Search = () => {
  const [pokemonsFiltered, setPokemonsFiltered] = useState([])
  const { allPokemons } = useContext(AllPokemonsContext)

  const handleInput = (e) => {
    if (e.target.value.length === 0) {
      setPokemonsFiltered([])
    } else {
      const filter = allPokemons.filter((p) => p.name.includes(e.target.value))
      setPokemonsFiltered(filter)
    }
  }

  return (
    <Container>
      <DivInput filtered={allPokemons.length !== 0}>
        <input
          type="text"
          placeholder="Digite o nome do Pokemon..."
          onInput={handleInput}
          disabled={allPokemons.length === 0}
        />
      </DivInput>

      {allPokemons.length === 0 ? (
        <LoadingPokemons>
          <p>Aguarde, carregando pokemons!</p>
        </LoadingPokemons>
      ) : (
        <CardPokemon pokemons={pokemonsFiltered} isLoading={true} />
      )}
    </Container>
  )
}

export default Search

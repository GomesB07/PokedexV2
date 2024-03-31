import React, { useContext, useEffect, useState } from "react"

import { CardPokemon } from "../../components"
import { AllPokemonsContext } from "../../Hooks/AllPokemonsContext"
import { getAllPokemonsUrl } from "../../services/getData"
import { Container, DivInput, LoadingPokemons } from "./styles"

const Search = () => {
  const [pokemons, setPokemons] = useState([])
  const [pokemonsFiltered, setPokemonsFiltered] = useState([])
  const { allPokemons } = useContext(AllPokemonsContext)

  useEffect(() => {
    const getPoke = async () => {
      try {
        const limitPokemonPage = 10000
        const data = await getAllPokemonsUrl({
          limitPokemonPage,
          pokemonNumber: 0,
        })
        setPokemons(data)
      } catch (err) {
        console.log("Erro na solicitação:", err)
      }
    }
    getPoke()
  }, [])

  const handleInput = (e) => {
    if (e.target.value.length === 0) {
      setPokemonsFiltered([])
    } else {
      const filter = pokemons.filter((p) =>
        p.data.name.includes(e.target.value),
      )
      setPokemonsFiltered(filter)
    }
  }

  return (
    <Container>
      <DivInput filtered={pokemonsFiltered.length !== 0}>
        <input
          type="text"
          placeholder="Digite o nome do Pokemon..."
          onChange={handleInput}
          disabled={pokemons.length === 0}
        />
      </DivInput>

      {pokemons.length === 0 ? (
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

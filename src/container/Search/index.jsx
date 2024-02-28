import React, { useEffect, useState } from "react"

import { CardPokemon } from "../../components"
import { getAllPokemonsUrl } from "../../services/getData"
import { Container, DivInput } from "./styles"

const Search = () => {
  const [pokemons, setPokemons] = useState([])
  const [pokemonsFiltered, setPokemonsFiltered] = useState([])

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
    console.log(e.target.value)

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
      {pokemons && (
        <>
          <DivInput>
            <input
              type="text"
              placeholder="Digite o nome do Pokemon..."
              onChange={handleInput}
            />
          </DivInput>

          <div className="sub-container">
            {pokemonsFiltered && (
              <CardPokemon pokemons={pokemonsFiltered} isLoading={true} />
            )}
          </div>
        </>
      )}
    </Container>
  )
}

export default Search

import React, { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

import { CardPokemon, Error } from "../../components"
import { getAllPokemonsUrl } from "../../services/getData"
import { Container, DivButtons } from "./styles"

const AllPokemons = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [pokemons, setPokemons] = useState([])
  const [pokemonNumber, setPokemonNumber] = useState()
  const [searchParams, setSearchParams] = useSearchParams()
  const [isError, setIsError] = useState(false)
  const page = searchParams.get("page")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllPokemonsUrl({
          limitPokemonPage: 51,
          pokemonNumber,
        })
        setPokemons(data)
        setIsLoading(true)
      } catch (error) {
        console.error(error)
        setIsError(true)
      }
    }
    fetchData()
  }, [pokemonNumber])

  useEffect(() => {
    const currentPage = parseInt(page, 10) || 1
    setPokemonNumber((currentPage - 1) * 51)
  }, [page])

  const handleChangePage = (value) => {
    const currentPage = parseInt(page, 10) || 1

    if (value) {
      setSearchParams({ page: currentPage + 1 })
    } else {
      setSearchParams({ page: currentPage - 1 || 1 })
    }

    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return isError ? (
    <Error />
  ) : (
    <Container>
      <CardPokemon pokemons={pokemons} isLoading={isLoading} />

      {isLoading && (
        <DivButtons>
          <button onClick={() => handleChangePage(false)} disabled={!isLoading}>
            Anterior
          </button>
          <button onClick={() => handleChangePage(true)} disabled={!isLoading}>
            Próximo
          </button>
        </DivButtons>
      )}
    </Container>
  )
}

export default AllPokemons

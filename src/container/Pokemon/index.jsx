import React, { useContext, useEffect, useState } from "react"

import { getEvolutions, getPokemon, getSpecies } from "../../services/getData"

import ProgressBar from "@ramonak/react-progress-bar"
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow"

import {
  Container,
  NameAndId,
  SectionInfos,
  PokeImgDiv,
  PokeInfoDiv,
  SectionEvolution,
} from "./styles"
import { useNavigate, useParams } from "react-router-dom"
import { TypesPokemon, Error } from "../../components"

import ColorStyles, { ColorsGraph } from "../../styles/ColorStyles"

import { PokemonColorContext } from "../../context/HeaderContext"

const Pokemon = () => {
  const [pokemon, setPokemon] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [evolutions, setEvolutions] = useState()
  const [pokemonsEvolutions, setPokemonsEvolutions] = useState([])

  const navigate = useNavigate()

  const { pokemonName } = useParams()

  const { setPokemonColor, pokemonColor } = useContext(PokemonColorContext)

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const dataPokemon = await getPokemon(pokemonName)
        setPokemon(dataPokemon)
        setPokemonColor(ColorStyles(pokemon.types[0].type.name))
      } catch (err) {
        console.error(err)
        setIsError(false)
      }
    }

    fetchPokemon()
  }, [pokemon])

  useEffect(() => {
    const fetchSpecies = async () => {
      try {
        const data = await getSpecies(pokemon.species.url)

        const dataEvolutions = await getEvolutions(
          data.data.evolution_chain.url,
        )
        setEvolutions(dataEvolutions)

        setIsLoading(true)
      } catch (error) {
        console.error(error)
      }
    }
    fetchSpecies()
  }, [pokemon])

  useEffect(() => {
    try {
      const namesPokemonsEvolutions = []
      if (evolutions.chain.evolves_to.length === 1) {
        namesPokemonsEvolutions.push(
          evolutions.chain.species.name,
          evolutions.chain.evolves_to[0].species.name,
          evolutions.chain.evolves_to[0].evolves_to[0].species.name,
        )
      } else {
        namesPokemonsEvolutions.push(evolutions.chain.species.name)
        for (let i = 1; i < evolutions.chain.evolves_to.length; i++) {
          namesPokemonsEvolutions.push(
            evolutions.chain.evolves_to[i].species.name,
          )
        }
      }

      const fetchEvolutions = async () => {
        const data = await namesPokemonsEvolutions.map((namePoke) =>
          getPokemon(namePoke),
        )
        const response = await Promise.all(data)
        setPokemonsEvolutions(response)
      }
      fetchEvolutions()
    } catch (error) {
      console.error(error)
    }
  }, [evolutions])

  return isError ? (
    <Error />
  ) : (
    pokemon && (
      <Container color={pokemonColor}>
        <NameAndId>
          <div className="div-name">
            <p>{pokemon.id}</p>
            <h3>{pokemon.name}</h3>
          </div>
          <div className="div-types-pokemon">
            <TypesPokemon types={pokemon.types} isLoading={isLoading} />
          </div>
        </NameAndId>

        <SectionInfos>
          <PokeImgDiv>
            <img
              src={
                pokemon.sprites.other.home.front_default ||
                pokemon.sprites.front_default ||
                pokemon.sprites.other.showdown.front_default
              }
            />
          </PokeImgDiv>

          <PokeInfoDiv>
            <div className="div-stats">
              <h2 className="stats-tittle">Stats</h2>

              {pokemon.stats.map((stat) => (
                <div className="stats" key={stat.id}>
                  <h2>{stat.stat.name}</h2>
                  <ProgressBar
                    maxCompleted={200}
                    completed={`${stat.base_stat}`}
                    className="wrapper"
                    animateOnRender
                    bgColor={ColorsGraph(pokemon.types[0].type.name)}
                  />
                </div>
              ))}
            </div>
          </PokeInfoDiv>
        </SectionInfos>

        {pokemonsEvolutions && (
          <SectionEvolution>
            <div className="evolution-div">
              <div className="evolution-title-div">
                <p>Evolução</p>
              </div>

              <div className="pokemons-evolution-div">
                {pokemonsEvolutions.map((pokemon, index) => (
                  <>
                    <div
                      className="pokemon-div"
                      key={pokemon.id}
                      onClick={() =>
                        navigate(`/pokemon/${pokemon.name}`, {
                          replace: true,
                        })
                      }
                    >
                      <img
                        src={
                          pokemon.sprites.other.home.front_default ||
                          pokemon.sprites.front_default ||
                          pokemon.sprites.other.showdown.front_default
                        }
                      />
                      <p>{pokemon.name}</p>
                    </div>
                    {index < pokemonsEvolutions.length - 1 && (
                      <DoubleArrowIcon
                        style={{
                          color: ColorsGraph(pokemon.types[0].type.name),
                        }}
                      />
                    )}
                  </>
                ))}
              </div>
            </div>
          </SectionEvolution>
        )}
      </Container>
    )
  )
}

export default Pokemon

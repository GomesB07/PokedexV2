import React from "react"
import { useNavigate } from "react-router-dom"

import ColorStyles from "../../styles/ColorStyles"
import { Skelet } from "../index"
import { Container, Pokemon } from "./styles"

export const CardPokemon = ({ pokemons, isLoading }) => {
  const navigate = useNavigate()

  const goPagePokemon = (pokemon) => {
    navigate(`/pokemon/${pokemon.name}`, {
      state: { pokemonColor: pokemon.types[0].type.name, pagePokemon: true },
    })
  }

  return (
    <Container>
      {pokemons &&
        pokemons.map(({ data: pokemon }) =>
          isLoading ? (
            <Pokemon
              key={pokemon.id}
              onClick={() => goPagePokemon(pokemon)}
              color={ColorStyles(pokemon.types[0].type.name)}
            >
              <div className="pokemon-img">
                <img
                  src={
                    pokemon.sprites.other.home.front_default ||
                    pokemon.sprites.front_default ||
                    pokemon.sprites.other.showdown.front_default
                  }
                  alt={`imagem pokemon ${pokemon.name}`}
                />
              </div>

              <p className="pokemon-name">{pokemon.name}</p>

              <div className="pokemon-informations">
                <p>id {pokemon.id}</p>
                <p>height {pokemon.height}</p>
                <p>weight {pokemon.weight}</p>
              </div>
            </Pokemon>
          ) : (
            <Skelet
              animation="wave"
              key={pokemon.id}
              width={"350px"}
              height={"500px"}
            />
          ),
        )}
    </Container>
  )
}

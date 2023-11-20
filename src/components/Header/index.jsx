import React, { useState } from "react"
import { FaSearch } from "react-icons/fa"
import { MdOutlineClose } from "react-icons/md"

import { useForm } from "react-hook-form"

import { Container, Nav, NavLink, SearchDiv, SearchDivIcon } from "./styles"

const Header = () => {
  const [searchView, setSearchView] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <Container>
      <div className="logo">
        <h1>Pokedex</h1>
      </div>

      <Nav>
        <NavLink to="/pokemons">Pokémons</NavLink>

        <SearchDiv searchView={searchView}>
          <SearchDivIcon onClick={() => setSearchView(!searchView)}>
            {searchView ? (
              <MdOutlineClose style={{ color: "#fff" }} />
            ) : (
              <FaSearch style={{ color: "#fff" }} />
            )}
          </SearchDivIcon>

          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="input-search"
              placeholder="Pesquise um Pokémon"
              {...register("pokemonInput", { required: true })}
            />
            {errors.exampleRequired && (
              <span>É necessário pesquisar um Pokémon</span>
            )}
            <input className="input-button" type="submit" />
          </form>
        </SearchDiv>
      </Nav>
    </Container>
  )
}

export default Header

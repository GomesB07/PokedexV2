import React, { useContext, useState } from "react"

import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import SearchIcon from "@mui/icons-material/Search"

import { useLocation, useNavigate } from "react-router-dom"

import { Container, Nav, NavLink, SearchDiv } from "./styles"

import { PokemonColorContext } from "../../context/HeaderContext"

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const { pokemonColor } = useContext(PokemonColorContext)

  return (
    <Container
      openMenu={openMenu}
      pagePokemon={!!location.pathname.includes("/pokemon/")}
      color={pokemonColor}
    >
      <div className="logo">
        <h1>Pokedex</h1>
      </div>

      <MenuIcon
        className="open-menu-icon"
        style={{ color: "#fff", marginRight: "20px" }}
        onClick={() => setOpenMenu(true)}
      />

      <Nav openMenu={openMenu}>
        <CloseIcon
          className="close-menu-icon"
          style={{ color: "#fff", fontSize: "25px" }}
          onClick={() => setOpenMenu(false)}
        />
        <NavLink onClick={() => navigate("/")}>Home</NavLink>
        <NavLink onClick={() => navigate("/pokemons")}>Pokémons</NavLink>
        <NavLink onClick={() => navigate("/elements")}>Elementos</NavLink>

        <SearchDiv>
          <SearchIcon
            style={{ color: "#fff" }}
            onClick={() => navigate("/search")}
          />
        </SearchDiv>
      </Nav>
    </Container>
  )
}

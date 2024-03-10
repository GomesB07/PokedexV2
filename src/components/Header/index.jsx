import CloseIcon from "@mui/icons-material/Close"
import MenuIcon from "@mui/icons-material/Menu"
import SearchIcon from "@mui/icons-material/Search"
import React, { useContext, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

import { ColorPokemonContext } from "../../Hooks/ColorContext"
import { Container, Nav, NavLink, SearchDiv } from "./styles"

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const { pokemonColor } = useContext(ColorPokemonContext)

  const navigateLink = (link) => {
    navigate(link)
    setOpenMenu(false)
  }

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
        <NavLink onClick={() => navigateLink("/")}>Home</NavLink>
        <NavLink onClick={() => navigateLink("/pokemons")}>Pokémons</NavLink>
        <NavLink onClick={() => navigateLink("/elements")}>Elementos</NavLink>

        <SearchDiv>
          <SearchIcon
            style={{ color: "#fff" }}
            onClick={() => navigateLink("/search")}
          />
        </SearchDiv>

        <CloseIcon
          onClick={() => setOpenMenu(false)}
          style={{
            color: "#fff",
            marginTop: 20,
            display: openMenu ? "flex" : "none",
          }}
        />
      </Nav>
    </Container>
  )
}

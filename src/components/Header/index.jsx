import CloseIcon from "@mui/icons-material/Close"
import MenuIcon from "@mui/icons-material/Menu"
import SearchIcon from "@mui/icons-material/Search"
import React, { useContext, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

import { ColorPokemonContext } from "../../Hooks/ColorContext"
import { Container, Nav, NavLink, SearchDiv } from "./styles"

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const [hovered, setHovered] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const { pokemonColor } = useContext(ColorPokemonContext)

  const navigateLink = (link) => {
    navigate(link)
    setOpenMenu(false)
  }

  const isActive = (path) => location.pathname.includes(path) && "link-active"

  const handleMouseEnter = () => {
    setHovered(true)
  }

  const handleMouseLeave = () => {
    setHovered(false)
  }

  return (
    <Container
      openMenu={openMenu}
      pagePokemon={!!location.pathname.includes("/pokemon/")}
      color={pokemonColor}
    >
      <div className="logo" onClick={() => navigate("/")}>
        <h1>Pokedex</h1>
      </div>

      <MenuIcon
        className="open-menu-icon"
        style={{ color: "#fff", marginRight: "20px" }}
        onClick={() => setOpenMenu(true)}
      />

      <Nav openMenu={openMenu}>
        <NavLink
          className={isActive("/pokemons")}
          onClick={() => navigateLink("/pokemons")}
        >
          Pokémons
        </NavLink>
        <NavLink
          className={isActive("/elements")}
          onClick={() => navigateLink("/elements")}
        >
          Elements
        </NavLink>
        <NavLink
          className={isActive("/favorites")}
          onClick={() => navigateLink("favorites")}
        >
          Favorites
        </NavLink>

        <SearchDiv>
          <SearchIcon
            style={{
              color: hovered
                ? "#ff6565"
                : location.pathname.includes("/search")
                  ? "#ff0000"
                  : "#fff",
              cursor: "pointer",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
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

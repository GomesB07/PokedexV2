import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import AllPokemons from "../container/AllPokemons"
import Element from "../container/Element"
import Elements from "../container/Elements"
import Favorites from "../container/Favorites"
import Home from "../container/Home"
import Pokemon from "../container/Pokemon"
import Search from "../container/Search"
import DefaultLayout from "../layout/DefaultLayout"

const myRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/pokemons" element={<AllPokemons />} />
          <Route path="/pokemon/:pokemonName" element={<Pokemon />} />
          <Route path="/elements" element={<Elements />} />
          <Route path="/element/:element" element={<Element />} />
          <Route path="/search" element={<Search />} />
          <Route path="/favorites" element={<Favorites />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default myRoutes

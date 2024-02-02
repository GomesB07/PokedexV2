import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import DefaultLayout from "../layout/DefaultLayout"
import Home from "../container/Home"
import AllPokemons from "../container/AllPokemons"
import Pokemon from "../container/Pokemon"
import Elements from "../container/Elements"
import Element from "../container/Element"
import Search from "../container/Search"

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
        </Route>
      </Routes>
    </Router>
  )
}

export default myRoutes

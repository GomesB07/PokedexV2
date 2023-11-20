import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import DefaultLayout from "../layout/DefaultLayout"
import Home from "../container/Home"
import AllPokemons from "../container/AllPokemons"

const myRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/pokemons" element={<AllPokemons />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default myRoutes

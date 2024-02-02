import React from "react"
import ReactDOM from "react-dom/client"
import Routes from "./routes/myRoutes"
import GlobalStyles from "./styles/GlobalStyles"

import PokemonProvider from "./context/HeaderContext"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <PokemonProvider>
      <Routes />
      <GlobalStyles />
    </PokemonProvider>
  </React.StrictMode>,
)

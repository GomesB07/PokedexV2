import React from "react"
import ReactDOM from "react-dom/client"
import Routes from "./routes/myRoutes"
import GlobalStyles from "./styles/GlobalStyles"

import AppProvider from "./Hooks"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <AppProvider>
      <Routes />
      <GlobalStyles />
    </AppProvider>
  </React.StrictMode>,
)

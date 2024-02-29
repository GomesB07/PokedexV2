import React from "react"
import ReactDOM from "react-dom/client"

import AppProvider from "./Hooks"
import Routes from "./routes/myRoutes"
import GlobalStyles from "./styles/GlobalStyles"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <AppProvider>
      <Routes />
      <GlobalStyles />
    </AppProvider>
  </React.StrictMode>,
)

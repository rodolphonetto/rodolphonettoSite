import React from "react"

import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./Layout.styled"
import theme from "../../utils/theme"
import SEO from "../seo"

import NavBar from "../NavBar/NavBar"

const Layout = ({ children }) => {
  return (
    <>
      <SEO title="Rodolpho Netto" />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <NavBar />
        {children}
      </ThemeProvider>
    </>
  )
}

export default Layout

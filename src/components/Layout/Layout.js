import React from "react"

import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./Layout.styled"
import theme from "../../utils/theme"
import SEO from "../seo"

const Layout = ({ children }) => {
  return (
    <>
      <SEO title="Rodolpho Netto" />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </>
  )
}

export default Layout

import React from "react"

import { GlobalStyle } from "./Layout.styled"
import theme from "../../utils/theme"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle theme={theme} />
      {children}
    </>
  )
}

export default Layout

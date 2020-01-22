import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${props => props.theme.backgroundPage}
  }
  html {
   box-sizing: border-box;
   font-size: 62.5%;
}
}
 *,
 *::before,
 *::after {
   box-sizing: inherit;
}
body, h1, h2, h3, h4, h5, h6, p, ol, ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
  &::selection {
  color: ${props => props.theme.textColor};
  background: ${props => props.theme.primaryColor};
}
ol, ul {
  list-style: none;
}
img {
  max-width: 100%;
  height: auto;
}

p, span, a {
  &::selection {
  color: ${props => props.theme.textColor};
  background: ${props => props.theme.primaryColor};
}
}
`

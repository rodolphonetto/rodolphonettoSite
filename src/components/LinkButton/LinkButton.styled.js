import styled, { css } from "styled-components"

import { Link as GatsbyLink } from "gatsby"

export const LinkButtonStyled = styled(GatsbyLink)`
  text-decoration: none;
  font-family: ${props => props.theme.primaryFont}, sans-serif;
  font-size: ${props => props.fontSize};
  color: ${props => props.theme.neutral1};
  font-weight: bold;
  padding: ${props => props.paddingSize};
  border: 1px solid ${props => props.theme.primaryColor};
  border-radius: 10px;
  grid-column: 1 / -1;
  transition: background-color 0.3s ease;
  ${props =>
    props.center &&
    css`
      justify-self: center;
    `};

  :hover {
    background-color: ${props => props.theme.primaryColor};
    color: ${props => props.theme.secondaryColor};
  }
`

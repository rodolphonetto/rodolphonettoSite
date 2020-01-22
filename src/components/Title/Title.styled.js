import styled, { css } from "styled-components"

export const TitleSpan = styled.span`
  margin: ${props => props.marginSize};
  font-family: ${props => props.theme.primaryFont}, sans-serif;
  font-size: ${props => props.size};
  color: ${props =>
    props.textColor === "primary"
      ? props.theme.primaryColor
      : props.textColor === "secondary"
      ? props.theme.secondaryColor
      : props.theme.neutral1};

  ${props =>
    props.bold &&
    css`
      font-weight: bold;
    `};

  ${props =>
    props.center &&
    css`
      grid-column: 1 / -1;
      justify-self: center;
    `};
`

import styled from "styled-components"

export const TitleSpan = styled.span`
  font-family: ${props => props.theme.primaryFont}, sans-serif;
  font-size: ${props => props.size};
  color: ${props =>
    props.color === "primary"
      ? props.theme.primaryColor
      : props.color === "secondary"
      ? props.theme.secondaryColor
      : props.theme.textColor};
`

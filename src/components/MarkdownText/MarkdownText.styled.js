import styled, { css } from "styled-components"
import ReactMarkdown from "react-markdown"

export const Markdown = styled(ReactMarkdown)`
  margin: ${props => props.marginSize};
  font-family: ${props => props.theme.primaryFont}, sans-serif;
  font-size: ${props => props.size};
  line-height: ${props => props.lineheight};
  color: ${props => props.theme.neutral1};

  ${props =>
    props.center &&
    css`
      grid-column: 1 / -1;
      justify-self: center;
    `};

  p {
    margin-top: 3rem;
  }
`

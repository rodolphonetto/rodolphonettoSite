import styled from "styled-components"

export const Container = styled.header`
  height: 80vh;
  max-width: 70vw;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const Name = styled.span`
  font-family: ${props => props.theme.primaryFont}, sans-serif;
  font-weight: bold;
  font-size: 8rem;
  color: ${props => props.theme.primaryColor};
`

export const Illustration = styled.img`
  max-width: 40%;
`

export const Border = styled.img`
  position: absolute;
  bottom: 0;
  width: 100vw;
`

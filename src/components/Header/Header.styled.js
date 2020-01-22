import styled from "styled-components"

export const Container = styled.header`
  height: 80vh;
  max-width: 70vw;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const Greating = styled.span`
  font-family: ${props => props.theme.primaryFont}, sans-serif;
  font-size: 6rem;
  color: ${props => props.theme.secondaryColor};
`

export const Name = styled.span`
  font-family: ${props => props.theme.primaryFont}, sans-serif;
  font-weight: bold;
  font-size: 8rem;
  color: ${props => props.theme.primaryColor};
`

export const Job = styled.span`
  font-family: ${props => props.theme.primaryFont}, sans-serif;
  font-size: 4rem;
  color: ${props => props.theme.textColor};
`

export const Illustration = styled.img`
  max-width: 40%;
`

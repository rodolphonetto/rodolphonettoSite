import styled from "styled-components"

export const Container = styled.nav`
  margin: 0 auto;
  margin-top: 3rem;
  max-width: 90vw;
  height: 8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const ImageContainer = styled.div`
  height: 10rem;
  width: 10rem;
`
export const LinksContainer = styled.ul`
  display: flex;
  justify-content: space-between;
`
export const Links = styled.li`
  font-family: ${props => props.theme.primaryFont}, sans-serif;
  font-size: 2rem;
  text-transform: uppercase;
  color: ${props => props.theme.textColor};
  :not(:first-child) {
    margin-left: 6rem;
  }
`
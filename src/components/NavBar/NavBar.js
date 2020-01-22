import React from "react"
import * as S from "./NavBar.styled"

import Logo from "../../images/gatsby-icon.png"

const NavBar = () => {
  return (
    <S.Container>
      <S.ImageContainer src={Logo} />
      <S.LinksContainer>
        <S.Links>Techs</S.Links>
        <S.Links>Projetos</S.Links>
        <S.Links>Depoimentos</S.Links>
        <S.Links>Artigos</S.Links>
        <S.Links>Contato</S.Links>
      </S.LinksContainer>
    </S.Container>
  )
}

export default NavBar

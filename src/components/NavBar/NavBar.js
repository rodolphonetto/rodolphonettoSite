import React from "react"
import * as S from "./NavBar.styled"

import Img from "gatsby-image"

const NavBar = ({ imagem }) => {
  return (
    <S.Container>
      <S.ImageContainer>
        <Img
          fluid={imagem.childImageSharp.fluid}
          alt="Ilustração referente a webdeveloper"
        />
      </S.ImageContainer>
      <S.LinksContainer>
        <S.Links>Tech</S.Links>
        <S.Links>Projetos</S.Links>
        <S.Links>Depoimentos</S.Links>
        <S.Links>Artigos</S.Links>
        <S.Links>Contato</S.Links>
      </S.LinksContainer>
    </S.Container>
  )
}

export default NavBar

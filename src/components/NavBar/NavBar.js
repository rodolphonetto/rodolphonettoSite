import React from "react"
import * as S from "./NavBar.styled"

import Image from "../Image/Image"

const NavBar = () => {
  return (
    <S.Container>
      <S.ImageContainer>
        <Image image="logo.png" alt="Logo Rodolpho Netto" />
      </S.ImageContainer>
      <S.LinksContainer>
        <S.Links>Link</S.Links>
      </S.LinksContainer>
    </S.Container>
  )
}

export default NavBar

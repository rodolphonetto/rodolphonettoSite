import React from "react"

import Illustration from "../../images/header-illustration.svg"
import Border from "../../images/header-border.svg"

import * as S from "./Header.styled"

const Header = () => {
  return (
    <>
      <S.Container>
        <S.TextContainer>
          <S.Greating>Olá, Eu sou</S.Greating>
          <S.Name>Rodolpho Netto</S.Name>
          <S.Job>Web Developer</S.Job>
        </S.TextContainer>
        <S.Illustration src={Illustration} />
      </S.Container>
      <S.Border src={Border} />
    </>
  )
}

export default Header

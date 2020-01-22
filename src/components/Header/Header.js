import React from "react"

import Illustration from "../../images/header-illustration.svg"
import Border from "../../images/header-border.svg"
import Title from "../Title/Title"

import * as S from "./Header.styled"

const Header = () => {
  return (
    <>
      <S.Container>
        <S.TextContainer>
          <Title size="6rem" textColor="secondary">
            Olá, eu sou
          </Title>
          <Title size="8rem" textColor="primary" bold>
            Rodolpho Netto
          </Title>
          <Title size="4rem">Web Developer</Title>
        </S.TextContainer>
        <S.Illustration src={Illustration} />
      </S.Container>
      <S.Border src={Border} />
    </>
  )
}

export default Header

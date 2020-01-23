import React from "react"

import Img from "gatsby-image"

import * as S from "./Project.styled"

import LinkButton from "../../LinkButton/LinkButton"
import Title from "../../Title/Title"
import Text from "../../Text/Text"

const Project = ({ name, shortDescription, cover }) => {
  return (
    <S.Container>
      <Title size="3rem" textColor="primary" marginSize="0 0 4rem 0" center>
        {name}
      </Title>
      <S.CoverContainer>
        <Img fluid={cover} />
      </S.CoverContainer>
      <Text size="1.8rem" marginSize="4rem 0 4rem 0">
        {shortDescription}
      </Text>
      <LinkButton path="/" paddingSize="1.5rem 5rem" fontSize="1.6rem" center>
        Veja Mais
      </LinkButton>
    </S.Container>
  )
}

export default Project

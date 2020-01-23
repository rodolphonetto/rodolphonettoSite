import React from "react"

import Title from "../Title/Title"
import Container from "../Container/Container"
import Text from "../Text/Text"
import Project from "./Project/Project"

const Projects = ({ projects }) => {
  const projectsComponents = projects.map(project => {
    return (
      <Project
        name={project.name}
        shortDescription={project.shortDescription}
        cover={project.cover.childImageSharp.fluid}
      />
    )
  })

  return (
    <Container>
      <Title
        size={"4rem"}
        textColor={"primary"}
        marginSize="6rem 0 6rem 0"
        bold
        center
      >
        Projetos
      </Title>
      <Text size="1.8rem" lineheight="3rem" marginSize="0 0 12rem 0" center>
        Mussum Ipsum, cacilds vidis litro abertis. Todo mundo vê os porris que
        eu tomo, mas ninguém vê os tombis que eu levo! Tá deprimidis, eu conheço
        uma cachacis que pode alegrar sua vidis. Leite de capivaris, leite de
        mula manquis sem cabeça. Sapien in monti palavris qui num significa
        nadis i pareci latim. Paisis, filhis, espiritis santis. Admodum accumsan
        disputationi eu sit. Vide electram sadipscing et per. Atirei o pau no
        gatis, per gatis num morreus. Mais vale um bebadis conhecidiss, que um
        alcoolatra anonimis. Per aumento de cachacis, eu reclamis. Copo furadis
        é disculpa de bebadis, arcu quam euismod magna. Posuere libero varius.
        Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Praesent
        malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate
        dapibus.
      </Text>
      {projectsComponents}
    </Container>
  )
}

export default Projects

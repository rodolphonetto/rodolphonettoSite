import React from "react"

import { graphql } from "gatsby"

import Layout from "../components/Layout/Layout"
import Container from "../components/Container/Container"
import Title from "../components/Title/Title"
import Text from "../components/Text/Text"
import MarkdownText from "../components/MarkdownText/MarkdownText"

const ProjectPage = ({ data, pageContext }) => {
  return (
    <Layout>
      <Container>
        <Title
          size="4rem"
          textColor="primary"
          marginSize="6rem 2rem 2rem 2rem"
          center
          bold
        >
          {data.strapiProjeto.name}
        </Title>
        <MarkdownText
          size="2rem"
          lineheight="3.3rem"
          center
          source={data.strapiProjeto.description}
        />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query Post($slug: String!) {
    strapiProjeto(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      name
      description
    }
  }
`
export default ProjectPage

import React from "react"

import { graphql } from "gatsby"

import Layout from "../components/Layout/Layout"
import Header from "../components/Header/Header"
import Title from "../components/Title/Title"

const ProjectPage = ({ data, pageContext }) => {
  return (
    <Layout>
      <Header />
      <Title>{data.strapiProjeto.name}</Title>
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
    }
  }
`
export default ProjectPage

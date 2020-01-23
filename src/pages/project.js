import React from "react"

import { graphql } from "gatsby"

import Layout from "../components/Layout/Layout"
import Header from "../components/Header/Header"

const ProjectPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <Header />
    </Layout>
  )
}

export const pageQuery = graphql`
  query Project($strapiId: Int!) {
    strapiProjeto(strapiId: { eq: $strapiId }) {
      cover {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      name
      description
      images {
        url
      }
    }
  }
`

export default ProjectPage

import React from "react"

import { graphql } from "gatsby"

import Layout from "../components/Layout/Layout"
import Header from "../components/Header/Header"
import Projects from "../components/Projects/Projects"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Header />
      <Projects projects={data.allStrapiProjeto.nodes} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query MyQuery {
    allStrapiProjeto {
      nodes {
        name
        shortDescription
        cover {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default IndexPage

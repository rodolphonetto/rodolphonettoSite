import React from "react"

import { graphql } from "gatsby"

import NavBar from "../components/NavBar/NavBar"
import Layout from "../components/Layout/Layout"
import Header from "../components/Header/Header"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <NavBar imagem={data.logo} />
      <Header />
    </Layout>
  )
}

export const query = graphql`
  {
    logo: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    headerIllustration: file(relativePath: { eq: "header-illustration.svg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage

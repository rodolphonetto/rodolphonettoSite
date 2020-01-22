import React from "react"

import { graphql } from "gatsby"

import Layout from "../components/Layout/Layout"
import Header from "../components/Header/Header"
import Projects from "../components/Projects/Projects"

const IndexPage = () => {
  return (
    <Layout>
      <Header />
      <Projects />
    </Layout>
  )
}

export default IndexPage

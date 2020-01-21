import React from "react"
import { Helmet } from "react-helmet"

import NavBar from "../components/NavBar/NavBar"
import Layout from "../components/Layout/Layout"

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <link href="https://fonts.googleapis.com/css?family=Nunito&display=swap" rel="stylesheet"> 
      </Helmet>
      <Layout>
        <NavBar />
      </Layout>
    </>
  )
}

export default IndexPage

import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"

export default ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.connectBcg.childImageSharp.fluid} />
    </Layout>
  )
}

export const query = graphql`
  {
    connectBcg: file(relativePath: { eq: "connectBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

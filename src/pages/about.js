import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="About" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <p>
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image profile-picture"
            />
            Primula Horticulture &amp; Design is a landscape design company that
            came to be in 2018. Owner and head designer Niccole Smith has been
            practicing landscape design in Utah for almost 8 years.
          </p>
          <p>
            Her experience ranges from designing tiny residential gardens to
            expansive commercial and housing developments.
          </p>
          <p>
            Niccole also has extensive plant experience and knowledge gained by
            working in local nurseries and tropical greenhouses in Florida. She
            graduated with a degree in Landscape Architecture &amp;
            Environmental Planning from Utah State University in 2015.
          </p>
          <p>
            The ultimate goal of Primula Horticulture &amp; Design is to provide
            you with something beautiful, functional, and unique to you.
          </p>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(relativePath: { eq: "profile_pic.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)

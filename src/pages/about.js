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
          {/*<h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            About Me - Niccole
          </h2>
          <figure className="kg-card kg-image-card kg-width-wide">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>Large imagery is at the heart of this theme</figcaption>
          </figure>*/}
          <h3 id="dynamic-styles">About</h3>
          <p>
            My goal as a landscape designer is to create something beautiful,
            functional, and unique for you. I started my own landscape design
            company because I wanted to be able to ensure that each design I’m
            putting out into the world seamlessly puts those three things
            together.
          </p>
          <p>
            Primula Horticulture &amp; Design provides full-scale landscape
            plans, planting plans, outdoor planter design and install, and
            indoor planter design and install. During and since my education at
            Utah State University, I have been practicing landscape design for
            almost 8 years. Throughout those years and before starting Primula
            Horticulture &amp; Design in 2018, I have worked for landscape
            design firms big and small in both the residential and commercial
            sectors.
          </p>
          <p>
            Growing up in the very cold and very dry Cache Valley, I have always
            valued plant knowledge and staying current and up-to-date when it
            comes to plants. When I moved to Salt Lake, I worked for local
            nurseries before jumping right into design to ensure that my
            know-how was sharp. The more you know, the more exciting and
            different materials you can use and still be successful in our
            climate. A plan from Primula Horticulture &amp; Design will not be a
            cut and paste product.
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
    benchAccounting: file(relativePath: { eq: "profile-pic.jpg" }) {
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

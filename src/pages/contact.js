import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const ContactPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Contact"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <p>
            Do you like what you see? Are you interested in moving forward with
            a design? Please complete the following form or contact me directly.
          </p>
          <p>
            Niccole Smith
            <br />
            (385) 743-9099
            <br />
            primuladesign.slc@gmail.com
          </p>
        </div>
        <form method="post" action="#">
          <div className="row gtr-uniform">
            <div className="col-6 col-12-xsmall">
              <input type="text" name="name" id="name" placeholder="Name" />
            </div>
            <div className="col-6 col-12-xsmall">
              <input type="text" name="email" id="email" placeholder="Email" />
            </div>
          </div>
          <div className="row gtr-uniform">
            <div className="col-6 col-12-xsmall">
              <input
                type="tel"
                id="phone"
                name="phone"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                placeholder="Phone number eg. 801-111-2222"
                required
              />
            </div>
            <div className="col-6 col-12-xsmall">
              <input
                type="text"
                name="location"
                id="location"
                placeholder="Project location"
              />
            </div>
            <div className="col-12">
              <label for="project_interest">
                What type of service are you interested in?
              </label>
              <select name="project_interest" id="project_interest">
                <option value>Choose one...</option>
                <option value={"Planting plan"}>
                  Planting plan (plants only)
                </option>
                <option value={"Full-scale landscape plan"}>
                  Full-scale landscape plan (plants, bed layout, hardscape, etc)
                </option>
                <option value={"Container planting"}>Container planting</option>
              </select>
            </div>
            <div className="col-12">
              <textarea
                name="how_did_you_hear"
                id="how_did_you_hear"
                placeholder="How did you hear about Primula H&D?"
                rows={6}
                defaultValue={""}
              />
            </div>
            <div className="col-12">
              <textarea
                name="what_makes_you_interested_in_working_together"
                id="what_makes_you_interested_in_working_together"
                placeholder="What about Primula H&D makes you interested in working together?"
                rows={6}
                defaultValue={""}
              />
            </div>
            <div className="col-12">
              <textarea
                name="budget"
                id="budget"
                placeholder="What is your budget for landscape design?"
                rows={6}
                defaultValue={""}
              />
            </div>
            <div className="col-12">
              <textarea
                name="project_description"
                id="project_description"
                placeholder="Please describe your project"
                rows={6}
                defaultValue={""}
              />
            </div>
            <div className="col-12">
              <input type="submit" defaultValue="Submit" className="primary" />
            </div>
          </div>
        </form>
      </article>
    </Layout>
  )
}

const contactQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={contactQuery}
    render={data => (
      <ContactPage location={props.location} data={data} {...props} />
    )}
  />
)

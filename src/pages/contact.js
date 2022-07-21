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
          <p style={{ textAlign: "center" }}>
            Want to move forward? Please complete the following form or contact
            me directly.
          </p>
          <p style={{ textAlign: "center" }}>
            Niccole Smith
            <br />
            (385) 743-9099
            <br />
            primuladesign.slc@gmail.com
          </p>
        </div>
        <form method="post" action="https://formspree.io/mbjprdkj">
          <div className="row gtr-uniform">
            <div className="col-6 col-12-xsmall">
              <label for="name">Name</label>
              <input type="text" name="name" id="name" placeholder="Name" />
            </div>
            <div className="col-6 col-12-xsmall">
              <label for="email">Email</label>
              <input type="text" name="email" id="email" placeholder="Email" />
            </div>
          </div>
          <div className="row gtr-uniform">
            <div className="col-6 col-12-xsmall">
              <label for="phone">Phone number</label>
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Phone number eg. 801-111-2222"
                required
              />
            </div>
            <div className="col-6 col-12-xsmall">
              <label for="location">Project location</label>
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
                <option value="landscape_plan">Landscape Plan</option>
                <option value="container_planting">Container Planting</option>
              </select>
            </div>
            <div className="col-12">
              <label for="how_did_you_hear">
                How did you hear about Primula Horticulture &amp; Design?
              </label>
              <textarea
                name="how_did_you_hear"
                id="how_did_you_hear"
                placeholder="How did you hear about Primula Horticulture &amp; Design?"
                rows={6}
                defaultValue={""}
              />
            </div>
            <div className="col-12">
              <label for="what_makes_you_interested_in_working_together">
                What about Primula Horticulture &amp; Design makes you
                interested in working together?
              </label>
              <textarea
                name="what_makes_you_interested_in_working_together"
                id="what_makes_you_interested_in_working_together"
                placeholder="What about Primula Horticulture & Design makes you interested in working together?"
                rows={6}
                defaultValue={""}
              />
            </div>
            <div className="col-12">
              <label for="budget">What is your budget?</label>
              <textarea
                name="budget"
                id="budget"
                placeholder="What is your budget?"
                rows={6}
                defaultValue={""}
              />
            </div>
            <div className="col-12">
              <label for="project_description">
                Please describe your project
              </label>
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

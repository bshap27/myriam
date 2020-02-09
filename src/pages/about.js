import React from "react"
import { StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

// TODO: Consider using https://github.com/milesj/interweave to set inner HTML.

const About = () => (
  <Layout>
    <SEO title="about" />
    <StaticQuery
      query={graphql`query { gcms { texts { key, text, image { url } } } }`}
      render={data => (
        <div>
          <h2
            className="about-title"
          >
            {data.gcms.texts.find(c => c.key === 'aboutTitle').text}
          </h2>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <p
              className="about-text"
              dangerouslySetInnerHTML={{
                __html: data.gcms.texts.find(c => c.key === 'aboutText').text
              }}
              style={{width: '60%'}}
            />
            <div style={{width: '35%'}}>
              <div>
                <img
                  style={{height: '100%', width: '500px'}}
                  src={data.gcms.texts.find(c => c.key === 'aboutText').image.url}
                  alt="Myriam Schroeter"
                />
              </div>
              <p>myriam.schroeter@gmail.com</p>
            </div>
          </div>
        </div>
      )}
    />
  </Layout>
)

export default About

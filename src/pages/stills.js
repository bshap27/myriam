import React from "react"
import { StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Stills = () => (
	<Layout>
    <SEO title="stills" />
    <StaticQuery
      query={graphql`
        query {
          gcms {
            photos {
              image {
                url
              }
              collection
              caption
            }
          }
        }
      `}
      render={data => (
        <div>
          {data.gcms.photos.map(photo => <h2>{photo.image.url}</h2>)}
        </div>
      )}
    />
	 </Layout>
)
export default Stills

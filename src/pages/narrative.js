import React from "react"
import { StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Narrative = () => (
	<Layout>
    <SEO title="narrative" />
    <StaticQuery
      query={graphql`
        query {
          gcms {
            videos(where: { videoType: Narrative }) {
              title
              playLink
            }
          }
        }
      `}
      render={data => (
        <div>
          {data.gcms.videos.map(video => <h2>{video.title}</h2>)}
        </div>
      )}
    />
	 </Layout>
)
export default Narrative

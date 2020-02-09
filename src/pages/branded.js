import React from "react"
import { StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Branded = () => (
	<Layout>
		<SEO title="branded/commercial" />
    <StaticQuery
      query={graphql`
        query {
          gcms {
            videos(where: { videoType: Branded }) {
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
export default Branded

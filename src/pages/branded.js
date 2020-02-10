import React from "react"
import { StaticQuery } from "gatsby"
import ReactPlayer from 'react-player'

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
              credit
            }
          }
        }
      `}
      render={data => (
        <div>
          {data.gcms.videos.map(video => (
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <ReactPlayer url={video.playLink} light playing controls height='225px' width='400px'/>
              <p>{video.title} {video.credit ? `(${video.credit})` : ''}</p>
            </div>
          ))}
        </div>
      )}
    />
	 </Layout>
)
export default Branded

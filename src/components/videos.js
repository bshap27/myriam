import React from "react"
import { StaticQuery } from "gatsby"

const Videos = () => (
  <StaticQuery
    query={graphql`
      query {
        gcms {
          videos {
            title
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
)
export default Videos

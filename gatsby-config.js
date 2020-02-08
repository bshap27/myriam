module.exports = {
  siteMetadata: {
    title: `myriam schroeter`,
    description: `I'm a producer. Some of the folks I've worked with include Revlon, IFC, LG, Nordstrom, IMG, Estee Lauder and Sundance. I've also produced a number of independent narrative shorts, as well as scripted music-related content for Warner Bros and Def Jam. Prior to producing, I worked as a content editor and marketer for Amazon.`,
    author: `@bshap27`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
      typeName: "GraphCMS",
      fieldName: "gcms",
      url: "https://api-useast.graphcms.com/v1/ck6cu20ns0gkd01d79f2sgfbc/master",
    },
}
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

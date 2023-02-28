/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
const browserColor = require("./src/atomic/browserColor")

module.exports = {
  siteMetadata: {
    title: `GryfinoBiega.pl`,
    description: `Festiwal biegowy 3 maja i Bieg Niepodległości 11 listopada w Gryfinie`,
    author: `krzysztofstefanski`,
    siteUrl: `https://gryfinobiega.pl/`,
  },
  plugins: [
    `gatsby-plugin-image`,
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
        background_color: browserColor.red00,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Bai+Jamjuree:500,700", "Urbanist:400"],
        },
        active: () => {
          sessionStorage.fontsLoaded = true
        },
      },
    },
    `gatsby-plugin-svgr-svgo`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-portal`,
  ],
}

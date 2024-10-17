require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `GryfinoBiega.pl`,
    description: `Festiwal biegowy 3 maja i Bieg Niepodległości 11 listopada w Gryfinie`,
    author: `krzysztofstefanski`,
    siteUrl: `https://gryfinobiega.pl/`,
  },
  headers: [
    {
      source: `*`,
      headers: [
        {
          key: `x-frame-options`,
          value: `SAMEORIGIN`,
        },
      ],
    },
  ],
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
        background_color: `#FFF`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gryfinobiega.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-portal`,
    "gatsby-transformer-remark",
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
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-svgr-svgo`,
    `gatsby-plugin-scroll-reveal`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          "/*": ["X-Frame-Options: SAMEORIGIN"],
        },
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `https://kstefanski.pl/gryfinobiega/graphql`,
      },
    },
  ],
}

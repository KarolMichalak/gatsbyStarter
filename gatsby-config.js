require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Gatsby tester`,
    description: `This is my project to test gatsby static site generator`,
    author: `Kajonem Sensei`,
    keywords: ['my', 'site', 'testing'],
    siteUrl: process.env.SITE_URL,
    social: {
      twitter: process.env.TWITTER_NAME,
      facebook: process.env.FACEBOOK_NAME,
    },
    image: '/src/assets/images/gatsby-astronaut.png',
    ogLanguage: 'en_US',
  },
  plugins: [
    'gatsby-plugin-sitemap',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `My project`,
        short_name: `project`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: ``,
      },
    },
    'gatsby-plugin-offline',
    `gatsby-plugin-styled-components`,
  ],
}

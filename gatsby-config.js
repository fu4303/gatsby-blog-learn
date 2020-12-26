/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata:{
    title: 'Jane Tracy',
    description: 'I\'m a 24 year old self-taught Front-End Developer',
    author: 'Jane Tracy'
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
        options: {
        implementation: require('sass')
      },
    },
    `gatsby-plugin-sharp`,
     `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options:{
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 750,
            },
          },
        ],
      },
    },
  ],
}


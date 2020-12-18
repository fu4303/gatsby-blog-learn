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
    {
      resolve: `gatsby-source-filesystem`,
      options:{
        name: 'src',
        path: `${__dirname}/src/`
      }
    }
  ],
}

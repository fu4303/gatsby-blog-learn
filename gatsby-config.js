
module.exports = {
  
  siteMetadata:{
    title: 'Jane Tracy',
    description: 'I\'m a 24 year old self-taught Front-End Developer',
    author: 'Jane Tracy'
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
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


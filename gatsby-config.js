module.exports = {
  siteMetadata: {
    title: 'Shamin.me',
  },
  pathPrefix: `/shamin.me`,
  plugins: ['gatsby-plugin-react-helmet',
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: 'posts',
      },
    },
    `gatsby-transformer-remark`],
}

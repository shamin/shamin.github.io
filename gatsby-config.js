module.exports = {
  siteMetadata: {
    title: "shamin.github.io",
    description: "Shamin's blog",
    author: "@shamin",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/src/pages/blog/posts/`,
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/markdown/post.tsx"),
        },
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "shamin",
        start_url: "/",
        background_color: "#FFFFFF",
        theme_color: "#161D2E",
        display: "shamin",
        icon: "src/images/icon.png",
      },
    },
  ],
}

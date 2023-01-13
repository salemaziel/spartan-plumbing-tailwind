module.exports = {
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-react-helmet-async`,
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Spartan Plumbing and Drain`,
        short_name: `Spartan Plumbing`,
        start_url: `/`,
        background_color: `#0a4a89`,
        theme_color: `#0a4a89`,
        display: `minimal-ui`,
        icon: `src/images/logo-1-words.png`, // This path is relative to the root of the site.
      },
    },
  ]
};

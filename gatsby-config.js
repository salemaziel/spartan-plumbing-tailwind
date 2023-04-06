const config = require('./config/site');

module.exports = {
  siteMetadata: {
    ...config,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-react-helmet-async`,
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
//    {
//      resolve: `gatsby-plugin-advanced-sitemap`,
//      options: {
//          // The filepath and name to Index Sitemap. Defaults to '/sitemap.xml'.
//          output: "/sitemap.xml",
//          exclude: [
//              `/dev-404-page`,
//              `/404`,
//              `/404.html`,
//              `/offline-plugin-app-shell-fallback`,
//              `/my-excluded-page`,
//              /(\/)?hash-\S*/, // you can also pass valid RegExp to exclude internal tags for example
//          ],
//          createLinkInHead: true, // optional: create a link in the `<head>` of your site
//          addUncaughtPages: true, // optional: will fill up pages that are not caught by queries and mapping and list them under `sitemap-pages.xml`
//          additionalSitemaps: [ // optional: add additional sitemaps, which are e. g. generated somewhere else, but need to be indexed for this domain
//              {
//                  name: `my-other-posts`,
//                  url: `/blog/sitemap-posts.xml`,
//              },
//              {
//                  url: `https://example.com/sitemap.xml`,
//              },
//          ],
//      }
//  },
{
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {}, // option to add more headers. `Link` headers are transformed by the below criteria
//        allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
//        mergeSecurityHeaders: true, // boolean to turn off the default security headers
//        mergeCachingHeaders: true, // boolean to turn off the default caching headers
//        transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Spartan Plumbing and Drain`,
        short_name: `Spartan Plumbing`,
        description: `Residential and commercial plumbing services for San Diego, Temecula, Orange, Riverside and Los Angeles Counties`,
        start_url: `/`,
        background_color: `#0A4A89`,
        theme_color: `#D50000`,
        display: `minimal-ui`,
        icon: `static/logo/logo-1-words.png`, // This path is relative to the root of the site.
      },
    },
  ]
};

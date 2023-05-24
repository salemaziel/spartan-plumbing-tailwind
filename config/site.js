module.exports = {
    pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
    title: 'Spartan Plumbing and Drain', // Navigation and Site Title
    titleAlt: 'Spartan Plumbing and Drain', // Title for JSONLD
    description: 'Residential and commercial plumbing services for San Diego, Temecula, Orange, Riverside and Los Angeles Counties',
    url: 'https://www.spartanpad.com', // Domain of your site. No trailing slash!
    siteUrl: 'https://www.spartanpad.com/', // url + pathPrefix
    siteLanguage: 'en', // Language Tag on <html> element
    logo: 'static/logo/logo-1-words.png', // Used for SEO
    banner: 'static/logo/logo-1-words.png',
    ogimage: 'static/logo/logo-1-words.png', // Used for SEO
    // JSONLD / Manifest
    favicon: 'static/logo/logo-1-words.png', // Used for manifest favicon generation
    shortName: 'Spartan Plumbing', // shortname for manifest. MUST be shorter than 12 characters
    author: 'Gonzalo Guzman', // Author for schemaORGJSONLD
    themeColor: '#D50000',
    backgroundColor: '#0A4A89',
    twitter: '@spartanplumbinganddrain', // Twitter Username
  };
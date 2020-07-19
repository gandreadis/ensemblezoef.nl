module.exports = {
  siteMetadata: {
    title: `ZOEF`,
    description: `Een creatief, creërend collectief`,
    author: `@geoandreadis`,
    siteUrl: `https://ensemblezoef.nl`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-anchor-links`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/public/intl`,
        languages: [`en`, `nl`],
        defaultLanguage: `nl`,
      },
    },
  ],
}

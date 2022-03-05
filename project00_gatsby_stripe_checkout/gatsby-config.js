/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  /* Your site config here */
    plugins: [
      {
        resolve: `gatsby-source-stripe`,
        options: {
          objects: ["Price"],
          secretKey: 'sk_test_51KZ7YaJ37P00vqboOjpnUSye7cakAZHohpulcc9AK5N0WjuBHD0syoMnR4sJxtjhgXhUcTWIxE12QTFOK2fVAuUv00qRklR7dH',
          downloadFiles: false,
        },
      },
      {
        resolve: 'gatsby-plugin-snipcartv3',
        options: {
          apiKey: 'ZGQ2MDE2MGQtZDUxNy00YTZiLWEwOTAtMmFkM2Q3MGNkOTBkNjM3ODIxMDcxNzY0MzQ5OTQz'
        }
      }
  ],
}

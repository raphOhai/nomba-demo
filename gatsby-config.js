require("dotenv").config();

const path = require("path");
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-custom`,
      options: {
        apiKey: process.env.API_KEY,
      },
    },
  ],
  siteMetadata: {
    title: `Nomba`,
    description: `Nomba Makes Money Easy. Improving access to financial tools for the banked, underbanked and unbanked.
    `,
    author: `@fourthcanvas`,
  },

  // Kindly edit the manifest file details below also
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: "gatsby-plugin-mixpanel",
      options: {
        apiToken:
          process.env.NODE_ENV === "production"
            ? "7f5f8bc7493a36e52f8b7218315ef5ca"
            : "b4fd6c000dca9bee3b26dd034ca171a4",
        enableOnDevMode: true,
        pageViews: "all",
      },
    },
    {
      resolve: "gatsby-plugin-sass",
      options: {
        additionalData: `
          @import "style/terminal-page/abstracts/_mixins.scss";
          @import "style/terminal-page/abstracts/_variables.scss";
          `,
      },
    },
    {
      resolve: "@chakra-ui/gatsby-plugin",
      options: {
        /**
         * @property {boolean} [resetCSS=true]
         * if false, this plugin will not use `<CSSReset />
         */
        resetCSS: true,
        /**
         * @property {number} [portalZIndex=undefined]
         * The z-index to apply to all portal nodes. This is useful
         * if your app uses a lot z-index to position elements.
         */
        portalZIndex: undefined,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-root-import`,
      options: {
        src: path.join(__dirname, "src"),
        components: path.join(__dirname, "src/components"),
        svgs: path.join(__dirname, "src/assets/images/svgs"),
        gifs: path.join(__dirname, "src/assets/images/gifs"),
        config: path.join(__dirname, "src/config"),
        assets: path.join(__dirname, "src/assets"),
        utils: path.join(__dirname, "src/utils"),
        jpegs: path.join(__dirname, "src/assets/images/jpegs"),
        templates: path.join(__dirname, "src/templates"),
        mocks: path.join(__dirname, "src/mocks"),
        illustrations: path.join(__dirname, "src/assets/images/illustrations"),
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: process.env.NODE_ENV === "production" ? "G-F4H83CDY9T" : " ",
        includeInDevelopment: false,
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: process.env.NODE_ENV === "production" ? "945009719916078" : " ",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `blurred`,
          quality: 100,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
        },
      },
    },
    {
      resolve: `gatsby-background-image-es5`,
      options: {
        // add your own characters to escape, replacing the default ':/'
        specialChars: `/:`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nomba`,
        short_name: `Nomba`,
        start_url: `/`,
        //Dominant color of the brand
        background_color: `#FFCC00`,
        theme_color: `#FFCC00`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
};

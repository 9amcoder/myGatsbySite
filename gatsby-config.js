module.exports = {
  siteMetadata: {
    description: "Personal page of Steve Sultan",
    locale: "en",
    title: "Steve Sultan",
    formspreeEndpoint: "https://formspree.io/f/mzbozyeq",
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        basePath: "/",
        contentPath: "content/",
        showThemeLogo: false,
        theme: "gh-inspired",
      },
    },
  ],
};

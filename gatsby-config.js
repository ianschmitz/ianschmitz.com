module.exports = {
    siteMetadata: {
        title: "Home | Ian Schmitz",
    },
    plugins: [
        "gatsby-plugin-react-helmet",
        {
            resolve: `gatsby-plugin-gtag`,
            options: {
                trackingId: "UA-127027199-1",
                anonymize: true,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: "ianschmitz.com",
                short_name: "ianschmitz.com",
                start_url: "/",
                background_color: "#31313a",
                theme_color: "#31313a",
                display: "minimal-ui",
                icon: "src/images/favicon.png", // This path is relative to the root of the site.
            },
        },
        "gatsby-plugin-offline",
    ],
};

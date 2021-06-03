module.exports = {
    purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                ch: {
                    blue: "#2d4059",
                    peach: "#ea5455",
                    orange: "#f07b3f",
                    yellow: "#ffd460",
                },
                primary: {
                    yellow: "#ab8b00",
                    gray: "#68717e",
                },
            },
            spacing: {
                90: "20rem",
                120: "30rem",
                200: "44rem",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};

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
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};

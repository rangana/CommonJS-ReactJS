module.exports = {
    entry: './public/scripts/assignment-player/player-component.jsx',
    output: {
        path: "./public/dist",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loader: 'jsx-loader'
            }
        ]
    }
};

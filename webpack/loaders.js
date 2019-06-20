const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const jsLoader = {
    enforce: "pre",
    test: /\.js$/,
    loader: "source-map-loader"
};
const tsLoader = {
    test: /\.tsx?$/,
    loader: "awesome-typescript-loader"
};

const tslintLoader = {
    test: /\.tsx?$/,
    enforce: 'pre',
    loader: 'tslint-loader'
};

const scssLoader = {
    test: /\.scss$/,
    use: [
        { 
            loader: MiniCssExtractPlugin.loader,
            options: {
                // only enable hot in development
                hmr: process.env.NODE_ENV === 'dev',
            },
        },
        {
            loader: 'css-loader',
            options: {
                modules: {
                    localIdentName: '[name]__[local]--[hash:base64:5]',
                },
            },
        },
        "sass-loader"
    ]
}

module.exports = {
    jsLoader,
    tsLoader,
    tslintLoader,
    scssLoader
};
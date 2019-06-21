const path = require('path');
const sourcePath = path.join(__dirname, '../src');
const outPath = path.join(__dirname, '../dist');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// plugins
const plugins = require('./plugins');
// loaders
const loaders = require('./loaders');

// webpack config
module.exports = {
    entry: path.resolve(sourcePath, 'index.tsx'),
    output: {
        path: outPath,
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        alias: {
            'app': path.resolve(sourcePath, 'app/'),
        },
    },
    module: {
        rules: [
            loaders.scssLoader,
            loaders.jsLoader,
            loaders.tslintLoader,
            loaders.tsLoader
        ]
    },
    plugins: [
        plugins.WebpackEnvironmentPlugin,
        plugins.CleanWebpackPlugin,
        plugins.HtmlWebpackPlugin,
        plugins.MiniCssExtractPlugin
    ],

};
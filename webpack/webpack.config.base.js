const path = require('path');
console.log(__dirname);
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
        filename: "bundle.js",
        chunkFilename: '[name].chunk.js',
        path: outPath
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
    optimization: {
        splitChunks: {
          name: true,
          cacheGroups: {

            vendors: {
              test: /[\\/]node_modules[\\/]/,
              chunks: 'all',
              priority: -10
            }
          }
        },
        runtimeChunk: true
      },
};
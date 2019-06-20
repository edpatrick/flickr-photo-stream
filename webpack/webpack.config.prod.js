const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');

module.exports = merge(baseConfig, {
    output: {
        filename: "bundle.[contenthash].js",
        chunkFilename: '[name].[contenthash].chunk.js',
    },
    mode: "production",
    devtool: "source-map",
});
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');

module.exports = merge(baseConfig, {
    output: {
        filename: "bundle.js",
    },
    mode: "development",
    devtool: "inline-source-map",
});

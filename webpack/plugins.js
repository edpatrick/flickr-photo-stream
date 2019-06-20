const webpack = require('webpack');

// plugin imports
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// plugin config
const WebpackEnvironment= new webpack.EnvironmentPlugin({
    NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
    DEBUG: false
});

const CleanWebpack = new CleanWebpackPlugin(['dist']);

const HtmlWebpack = new HtmlWebpackPlugin({
    template: 'src/assets/index.html'
});

const MiniCssExtract = new MiniCssExtractPlugin({
    filename: 'style.[contenthash].css',
});

module.exports = {
    WebpackEnvironmentPlugin: WebpackEnvironment,
    CleanWebpackPlugin: CleanWebpack,
    HtmlWebpackPlugin: HtmlWebpack,
    MiniCssExtractPlugin: MiniCssExtract,
  };
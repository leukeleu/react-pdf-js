'use strict';

var webpack = require('webpack');
var baseConfig = require('./webpack.config.base');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = Object.create(baseConfig);
config.plugins = [
  new ExtractTextPlugin("styles.css"),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development')
  })

];

module.exports = config;

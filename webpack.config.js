var ExtractText = require('extract-text-webpack-plugin');
var LessClean = require('less-plugin-clean-css');
var HtmlFile = require('html-webpack-plugin');
var webpack = require('webpack');

var config = {
  cache: true,
  entry: './main.js',
  output: {
    path: 'build',
    filename: '[name].js',
    pathinfo: false
  },
  module: {
    loaders: [
      {
        test: /\.less$/,
        loader: ExtractText.extract(
          'css!autoprefixer?browsers=last 5 version' +
          '!less?config=lessLoaderCustom'
        )
      }, {
        test: /\.jext$/,
        loader: "jext"
      }
    ]
  },
  lessLoader: {
    lessPlugins: [
      new LessClean({advanced: true})
    ]
  },

  plugins: [
    new ExtractText('[name].css'),
    new HtmlFile({
      filename: 'index.html',
      template: 'index.html',
      hash: true,
      inject: 'head'
    })
  ]
};

module.exports = config;

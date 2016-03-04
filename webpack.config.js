/* eslint-disable */
var path    = require('path');
var webpack = require('webpack');
var _ = require('lodash');

var config = module.exports = {
  context: path.join(__dirname, 'frontend', 'js'),
  entry: ['./main.js']
};

config.resolve = {
  // tell webpack which extensions to auto search when it resolves modules. With this,
  // you'll be able to do `require('./utils')` instead of `require('./utils.js')`
  extensions: [ '', '.js', '.js.jsx' ],
  root: [path.resolve(path.join(__dirname, 'frontend', 'js'))]
};

config.module = {
  loaders: [
    {
      test: /\.jsx?$/,
      loader: 'babel',
      include: config.resolve.root
    }
  ]
};

config.entry.unshift('webpack/hot/only-dev-server');
config.entry.unshift('webpack-dev-server/client?http://127.0.0.1:8080/');

config.output = {
  // the filename of the compiled bundle, e.g. app/assets/javascripts/bundle.js
  filename: 'webpack-bundle.js',
  // if the webpack code-splitting feature is enabled, this is the path it'll use to download bundles
  publicPath: 'http://0.0.0.0:8080/',
  devtoolModuleFilenameTemplate: '[resourcePath]',
  devtoolFallbackModuleFilenameTemplate: '[resourcePath]?[hash]'
};

config.devServer = {
  contentBase: './frontend',
  hot:         true,
  inline:      true,
  host:        '127.0.0.1'
};

config.plugins = [new webpack.HotModuleReplacementPlugin()];

config = _.merge(config, {
  debug: true,
  displayErrorDetails: true,
  outputPathinfo: true,
  devtool: 'eval'
});

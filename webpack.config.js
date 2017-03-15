var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

module.exports = {

  entry: {
    bundle: './src/js/app.js',
    vendor: 'jquery'
  },

  output: {
    filename: 'js/[name].js', // '[chunkhash].[name].js',
    path: path.resolve(__dirname, 'dist/')
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor'/*, 'manifest'*/]
    }),
    new CopyWebpackPlugin([
      { from: 'src/index.html', to: 'index.html' }
    ])
  ],

  devtool: 'source-map',

  devServer: {
    host: 'localhost',
    port: 9000
  }

};

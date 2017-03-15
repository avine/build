var webpack = require('webpack');
var path = require('path');

module.exports = {

  entry: {
    bundle: './src/js/app.js',
    vendor: 'jquery'
  },

  output: {
    filename: '[name].js', // '[chunkhash].[name].js',
    path: path.resolve(__dirname, 'dist/js/')
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
      })
  ],

  devtool: 'source-map'

};

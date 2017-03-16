const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractLess = new ExtractTextPlugin({ filename: '[name].css' });

module.exports = {

  entry: {
    bundle: './src/js/app.js',
    style: './src/less/app.less',
    vendor: 'jquery'
  },

  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist/')
  },

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: 'babel-loader'
    }, {
      test: /\.less$/,
      exclude: /(node_modules|bower_components)/,
      use: extractLess.extract({
        use: ['css-loader', 'less-loader']
      })
    }]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor'/*, 'manifest'*/]
    }),
    new CopyWebpackPlugin([{
      from: 'src/index.html', to: 'index.html'
    }]),
    extractLess
  ],

  devtool: 'source-map',

  devServer: {
    host: 'localhost',
    port: 9000
  }

};

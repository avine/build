const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

let directory = __dirname.match(/[^\/\\]+$/)[0];

module.exports = {

  entry: {
    bundle: './src/js/msg.js'
  },

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../../dist/', directory)
  },

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: 'babel-loader'
    }]
  },

  plugins: [
    new CopyWebpackPlugin([{
      from: `./sandbox/${directory}/index.html`, to: './index.html'
    }])
  ],

  devtool: 'source-map',

  devServer: {
    host: '127.0.0.1'
  }

};

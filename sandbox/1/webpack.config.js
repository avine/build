const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

let directory = __dirname.match(/[^\/\\]+$/)[0];

module.exports = {

  entry: {
    bundle: './src/js/class.js'
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
    host: 'localhost',
    port: 9000
  }

};

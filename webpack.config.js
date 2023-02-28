const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.join(__dirname, 'client/src/index.jsx'),
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'client/dist')
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /nodeModules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  }
}
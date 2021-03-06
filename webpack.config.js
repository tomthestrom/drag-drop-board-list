const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {

    contentBase: './',

  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname)
  }
};
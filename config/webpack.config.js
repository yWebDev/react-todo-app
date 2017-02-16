const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:9000',
    'webpack/hot/only-dev-server',
    path.resolve(__dirname, '../src/app.js')
  ],
  output: {
    path: path.resolve(__dirname, '../public'),
    publicPath: '/',
    filename: '[name].bundle.js'
  },
  module : {
    rules : [
      {
        test : /\.js/,
        loader : 'babel-loader',
        exclude: /(node_modules)/,
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },
  performance: { hints: false },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      fileName: 'vendor.js',
      minChunks: Infinity,
    }),
    new HtmlWebpackPlugin({
      title: 'Todo list',
      template: './src/index.html',
      inject: 'body'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
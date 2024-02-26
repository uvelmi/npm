const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const mode = process.env.NODE_ENV === 'production' ? 'production':'development'

module.exports = {
  entry:'./src/index.js',
	mode,
  module: {
    rules: [
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ]
  },
	devtool: process.env.NODE_ENV === 'production' ? 'hidden-source-map' : 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
      new CopyPlugin({
      patterns: [
        { from: 'static', to: 'static' },
      ],
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
}), ], }
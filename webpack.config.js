const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {

  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.js',
    clean: true
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '@class': path.resolve(__dirname, 'src/js/class/'),
      '@scripts': path.resolve(__dirname, 'src/js/'),
      '@styles': path.resolve(__dirname, 'src/styles/')
    }
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.s?css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin()
  ]

}
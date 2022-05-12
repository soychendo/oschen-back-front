const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.js',
    clean: true
  },
  mode: "development",
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@class': path.resolve(__dirname, './src/js/class/'),
      '@scripts': path.resolve(__dirname, './src/js/'),
      '@styles': path.resolve(__dirname, './src/styles/'),
      '@images': path.resolve(__dirname, './public/assets/'),
      '@public': path.resolve(__dirname, './public/'),
      '@components': path.resolve(__dirname, './src/components/'),
      '@containers': path.resolve(__dirname, './src/containers/'),
      '@database': path.resolve(__dirname, './piblic/database/'),
      '@utils': path.resolve(__dirname, './src/utils/')
    }
  },
  module: {
    rules: [
      {
        test: /\.js|\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.s?css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.png|jpg|svg|jpeg|webp$/,
        type: 'asset/resource',
        generator: {
          filename: './public/assets[hash][ext]',
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
      inject: 'body'
    }),
    new MiniCssExtractPlugin()
  ],
  devServer: {
    historyApiFallback: true
  }

}
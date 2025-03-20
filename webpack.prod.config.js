const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const dist_abs_path = path.resolve(__dirname, 'dist');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: dist_abs_path,
    filename: 'bundle.[contenthash].js', // use `[contenthash]` to facilitate browser caching
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Janus',
      filename: 'index.html',
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin(),
  ],
};

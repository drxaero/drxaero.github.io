const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const dist_abs_path = path.resolve(__dirname, 'dist');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: dist_abs_path,
    filename: '[name].[contenthash].js', // use `[contenthash]` to facilitate browser caching
    clean: true, // clean the `dist_abs_path` before emitting files
  },
  devServer: {
    static: {
      directory: dist_abs_path,
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
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
    new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
    new HtmlWebpackPlugin({
      title: 'Janus',
      filename: 'index.html',
      template: './src/index.html',
    }),
  ],
};

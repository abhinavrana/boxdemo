// import path from 'path';

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const { IgnorePlugin } = require('webpack');
// export default {
module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src','app'),
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js','.jsx']
    },
    devServer: {
        historyApiFallback: true
    },
    module: {
      rules: [
        {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /(node_modules)/
        },
        {
            test: /\.s?css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        }
    ]
    },
    plugins: [
      new MiniCssExtractPlugin({
          filename: '[name].css',
      }),
      new IgnorePlugin({
          resourceRegExp: /moment$/, // Moment is optionally included by Pikaday, but is not needed in our bundle
      }),
  ]
}

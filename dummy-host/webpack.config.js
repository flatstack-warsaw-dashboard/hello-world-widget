import { URL } from 'node:url';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  context: new URL('./src', import.meta.url).pathname,
  entry: {},
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /\/node_modules\//,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
  ],
};

import { URL } from 'node:url';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  context: new URL('./src', import.meta.url).pathname,
  entry: './index.tsx',
  mode: 'development',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(tsx?|jsx?)$/,
        use: 'babel-loader',
        exclude: /\/node_modules\//,
      },
    ],
  },
  plugins: [
    new webpack.container.ModuleFederationPlugin({
      name: 'dummy-host',
      remotes: {
        widgets: 'widgets@http://localhost:3301/remote.js',
      },
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
  ],
};

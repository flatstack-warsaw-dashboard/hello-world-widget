import { URL } from 'node:url';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  context: new URL('./src', import.meta.url).pathname,
  entry: './index.ts',
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
      name: 'dummyHost',
      remotes: {
        'hello-world-widget':
          'helloWorldWidget@http://localhost:3301/remote.js',
      },
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
  ],
};

import { URL } from 'node:url';

const NODE_ENV = process.env.NODE_ENV || 'development';

export default {
  context: new URL('./src', import.meta.url).pathname,
  entry: { main: './index.tsx' },
  mode: NODE_ENV,
  output: {
    filename: '[name].js',
    chunkFilename: '[id].[contenthash].js',
    path: new URL('./dist', import.meta.url).pathname,
    clean: true,
    publicPath: 'auto',
  },
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
  devServer: {
    port: 3301,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
};

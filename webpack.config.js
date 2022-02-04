import { URL } from 'node:url';
import { StatsWriterPlugin } from 'webpack-stats-plugin';

const NODE_ENV = process.env.NODE_ENV || 'development';

export default {
  context: new URL('./src', import.meta.url).pathname,
  entry: { main: './index.tsx' },
  mode: NODE_ENV,
  output: {
    filename: '[name].[contenthash].js',
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
  plugins: [
    new StatsWriterPlugin({
      filename: 'manifest.json',
      transform(data) {
        return JSON.stringify({
          main: data.assetsByChunkName.main[0],
        });
      },
    }),
  ],
  devServer: {
    port: 3301,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
};

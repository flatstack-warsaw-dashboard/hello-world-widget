import { URL } from 'node:url';
import { readFile } from 'node:fs/promises';
import webpack from 'webpack';

const NODE_ENV = process.env.NODE_ENV || 'development';

const name = 'helloWorldWidget';

const packageJson = JSON.parse(
  await readFile(new URL('./package.json', import.meta.url), {
    encoding: 'utf8',
  }),
);

const deps = packageJson.dependencies;

export default {
  context: new URL('./src', import.meta.url).pathname,
  entry: {},
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
  plugins: [
    new webpack.container.ModuleFederationPlugin({
      name,
      filename: 'remote.js',
      exposes: { '.': './index.tsx' },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        'react/jsx-runtime': { singleton: true },
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom'],
        },
        'styled-components': {
          singleton: true,
          requiredVersion: deps['styled-component'],
        },
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

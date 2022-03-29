import { URL } from 'node:url';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { readFile } from 'node:fs/promises';

const packageJson = JSON.parse(
  await readFile(new URL('../package.json', import.meta.url), {
    encoding: 'utf8',
  }),
);

console.log(packageJson);

const deps = packageJson.dependencies;

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
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
  ],
};

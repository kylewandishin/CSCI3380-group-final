const path = require('path');
const nodeExternals = require('webpack-node-externals');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development', // or 'production' as needed
  entry: './index.js',
  target: 'node',
  externals: [nodeExternals()], // This tells webpack not to bundle node_modules
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader',
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: 'src/views', to: 'src/views' }],
    }),
  ],
  devtool: 'source-map',
};

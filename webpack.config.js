const path = require('path');
const nodeExternals = require('webpack-node-externals');

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
      // Add additional rules (e.g., for Babel) if needed
    ],
  },
  devtool: 'source-map',
};

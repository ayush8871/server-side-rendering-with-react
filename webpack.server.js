const path = require('path');
const merge = require('webpack-merge');

const baseConfig = require('./webpack.base');

const config = {
  // Tell webpack that we're going to build for nodeJS instead of browser
  target: 'node',

  // Tell webpack where is the entry file
  entry: './src/index.js',

  // Tell webpack where to put the output file that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  }
};

module.exports = merge(baseConfig, config);
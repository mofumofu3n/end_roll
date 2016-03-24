var webpack = require('webpack');
var BowerWebpackPlugin = require("bower-webpack-plugin");
var path = require('path');

module.exports = {
  entry: {
    app: './entry.js'
  },
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    root: [path.join(__dirname, "bower_components")],
    moduleDirectories: ["bower_components"],
    extensions: ["", ".js", ".webpack.js", ".web.js"]
  },
  plugins: [
    new BowerWebpackPlugin()
  ]
}

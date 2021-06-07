var path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve("build"),
    filename: "index.js",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.s[ac]ss$/i,
        use: [
          
          "style-loader",
          
          "css-loader",
          
          "sass-loader",
          
        ]
      }
    ]
  },
  resolve:{
    extenions:[".js",".jsx",".scss"]
  },
  externals: {
    react: "react"
  }
};
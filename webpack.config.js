const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        use: "babel-loader",
        test: /\.js$/
      },
      {
        use: ["style-loader", MiniCssExtractPlugin.loader, "css-loader"],
        test: /\.css$/
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css"
    })
  ]
};

module.exports = config;

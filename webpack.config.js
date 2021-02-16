const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = [
  {
    entry: "./src/index.js",
    mode: process.env.NODE_ENV === "development" ? "development" : "production",
    output: {
      filename: "main.js",
      path: path.resolve(__dirname, "dist"),
    },
    devServer: {
      contentBase: [
        path.join(__dirname, "dist"),
        path.join(__dirname, "public"),
      ],
      compress: true,
      port: 9000,
      open: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "public/index.html"),
      }),
    ],
  },
  {
    entry: "./src/lib/WaveSurferZoomToMouse.js",
    mode: process.env.NODE_ENV === "development" ? "development" : "production",
    output: {
      path: path.resolve(__dirname, "dist"),
      library: "WaveSurferZoomToMousePlugin",
      libraryTarget: "umd",
      filename: "WaveSurferZoomToMousePlugin.js",
    },
  },
];

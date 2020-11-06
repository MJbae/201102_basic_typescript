const path = require("path");
const webpack = require("webpack");

// 이하는 개발환경 모드
// 배포환경 시 mode: 'production' / devtool: 'hidden-source-map'
module.exports = {
  mode: "development",
  devtool: "eval",
  resolve: {
    extensions: [".jsx", ".js", ".tsx", ".ts"],
  },

  entry: {
    app: "./client",
  },
  // ts or tsx 파일이 있으면 해당 loader로 문법 변환
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
    ],
  },
  // dist 폴더 생성 후 app.js 파일 생성
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "dist"),
  },
};

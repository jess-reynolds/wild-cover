module.exports = {
  mode: "development",
  entry: ["./style.scss"],
  module: {
    rules: [
      {
        test: /\.(sa|sc)ss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: "file-loader"
          }
        ]
      }
    ]
  }
};

// Paths
import { source } from "../paths";
// Plugins
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const loadDevelopmentCss = () => ({
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        exclude: /\.m.s[ac]ss$/i,
        include: source,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.m.s[ac]ss$/i,
        include: source,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          },
          "sass-loader"
        ]
      }
    ]
  }
});

export const loadProductionCss = () => ({
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        exclude: /\.m.s[ac]ss$/i,
        include: source,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.m.s[ac]ss$/i,
        include: source,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          },
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[contenthash].[hash:5].css",
      chunkFilename: "css/[contenthash].[hash:5].css"
    })
  ]
});

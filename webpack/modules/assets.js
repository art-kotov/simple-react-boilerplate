// Paths
import { source, statics } from "../paths";
// Plugins
import HtmlWebpackPlugin from "html-webpack-plugin";
import FaviconsWebpackPlugin from "favicons-webpack-plugin";
import HtmlWebpackTemplate from "html-webpack-template";

export const loadImages = () => ({
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        include: source,
        loader: "file-loader",
        options: {
          name: "assets/[name].[ext]"
        }
      }
    ]
  }
});

export const loadFonts = () => ({
  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        include: source,
        use: ["file-loader"]
      }
    ]
  }
});

export const setupHtml = () => ({
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: HtmlWebpackTemplate,
      appMountIds: ["root"],
      title: "Work Template",
      favicon: `${statics}/favicon.svg`,
      meta: [
        {
          name: "viewport",
          content: "user-scalable=no, width=device-width, initial-scale=1"
        }
      ]
    })
  ]
});

export const setupFavicon = () => ({
  plugins: [
    new FaviconsWebpackPlugin({
      logo: "./static/favicon.svg",
      cache: true
    })
  ]
});

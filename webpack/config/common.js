// Core
import Dotenv from "dotenv-webpack";
// Paths
import { build, source } from "../paths";
// Webpack modules
import { loadFonts, loadImages, setupHtml } from "../modules/assets";
import { loadJavaScript } from "../modules/code";
import { cleanBuildDirectory, setupStyledReporting } from "../modules/utils";
// Instruments
import merge from "webpack-merge";

export const commonConfiguration = () => {
  return merge(
    // Loaders
    loadJavaScript(),
    loadImages(),
    loadFonts(),
    // Plugins
    setupStyledReporting(),
    cleanBuildDirectory(),
    setupHtml(),
    {
      entry: source,
      output: {
        path: build
      },
      resolve: {
        extensions: [".js", ".json", ".scss", ".m.scss", ".png", ".jpg"],
        modules: [source, "node_modules"]
      },
      plugins: [new Dotenv()]
    }
  );
};

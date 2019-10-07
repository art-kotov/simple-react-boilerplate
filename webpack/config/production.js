// Configurations
import { commonConfiguration } from "./common";
// Webpack modules
import { setupFavicon } from "../modules/assets";
import { loadProductionCss } from "../modules/styles";
import { cleanBuildDirectory } from "../modules/utils";
// Instruments
import merge from "webpack-merge";

export const productionConfiguration = () =>
  merge(
    // Generator
    commonConfiguration(),

    // Loaders
    loadProductionCss(),
    setupFavicon(),

    // Plugins
    cleanBuildDirectory(),
    {
      mode: "production",
      output: {
        filename: "js/[name].[chunkhash:5].js"
      },
      optimization: {
        minimize: true
      }
    }
  );

// Modules
import { loadDevelopmentCss } from "../modules/styles";
// Instruments
import merge from "webpack-merge";
import { commonConfiguration } from "./common";

export const developmentConfiguration = () =>
  merge(
    //  Generator
    commonConfiguration(),
    //  Loaders
    loadDevelopmentCss(),
    {
      mode: "development",
      output: {
        filename: "js/[name].bundle.js"
      },
      devtool: "inline-source-map",
      devServer: {
        contentBase: "./dist"
      }
    }
  );

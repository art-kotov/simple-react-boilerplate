// Plugins
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import Stylish from "webpack-stylish";

export const cleanBuildDirectory = () => ({
  plugins: [new CleanWebpackPlugin()]
});

export const setupStyledReporting = () => ({
  stats: "none",
  plugins: [new Stylish()]
});

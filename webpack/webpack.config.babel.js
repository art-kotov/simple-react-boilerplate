// Presets
import { developmentConfiguration, productionConfiguration } from "./config";

export default env => {
  const dev = env === "development";
  return dev ? developmentConfiguration() : productionConfiguration();
};

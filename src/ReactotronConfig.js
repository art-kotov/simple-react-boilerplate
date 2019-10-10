import Reactotron from "reactotron-react-js";
// import the plugin
import { mst } from "reactotron-mst";

Reactotron.configure()
  .connect()
  .use(mst());

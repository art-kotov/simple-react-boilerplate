// Core
import Reactotron from "reactotron-react-js";
import { types } from "mobx-state-tree";

// Stores
import UserStore from "./user-store";

export const RootStore = types.model("RootStore", {
  userStore: UserStore
});
export const store = RootStore.create({
  userStore: {}
});

Reactotron.trackMstNode(store);

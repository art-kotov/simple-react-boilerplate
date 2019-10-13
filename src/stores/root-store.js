// Core
import Reactotron from "reactotron-react-js";
import { onSnapshot, types } from "mobx-state-tree";

// Stores
import UserStore from "./user-store";
import UiStore from "./ui-store";

export const RootStore = types.model("RootStore", {
  userStore: UserStore,
  ui: UiStore
});
export const store = RootStore.create({
  userStore: {},
  ui: {}
});

Reactotron.trackMstNode(store);

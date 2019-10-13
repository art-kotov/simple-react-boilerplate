import { types } from "mobx-state-tree";

const { boolean, model,optional } = types;

const UiStore = model("UiStore", {
  error: false
}).actions(self => ({
  setError() {
    self.error = true;
  }
}));

export default UiStore;

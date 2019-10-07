import { types, flow } from "mobx-state-tree";
import { api } from "../services/api";

const { string, optional, boolean, model, maybeNull, number, array } = types;

const UserDataModel = model({
  email: string,
  firstName: string
});

const UserStore = model("UserStore", {
  userData: maybeNull(UserDataModel),
  userId: maybeNull(number)
}).actions(self => ({
  setUsername(event) {
    self.username = event.target.value;
  },

  setPassword(event) {
    self.password = event.target.value;
  },
  logIn: async ev => {
    ev.preventDefault();
    try {
    } catch (e) {
    } finally {
    }
  }
}));

export default UserStore;

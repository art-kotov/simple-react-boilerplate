import { types, flow } from "mobx-state-tree";
import { api } from "../services/index";

const { string, optional, boolean, model, maybeNull, number, array } = types;

const UserDataModel = model({
  id: number,
  name: string
});

const UserStore = model("UserStore", {
  userData: optional(array(UserDataModel), [])
}).actions(self => ({
  fetchUsers: flow(function*() {
    const response = yield api.users.fetch();
    const data = yield response.json();
    self.userData = data;
    console.log(data);
  })
}));

export default UserStore;

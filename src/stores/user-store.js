import {
  types,
  flow,
  getParent,
  getPath,
  getRoot,
  getRelativePath
} from "mobx-state-tree";
import { api } from "../services/index";
import { checkResponse } from "../services/helpers";

const { string, optional, boolean, model, maybeNull, number, array } = types;

const UserDataModel = model({
  id: number,
  name: string
});

const UserStore = model("UserStore", {
  userData: optional(array(UserDataModel), []),
  isFetching: maybeNull(types.boolean)
}).actions(self => ({
  fetchUsers: flow(function*() {
    try {
      const response = yield api.users.fetch();
      if(!response.ok) {
        throw new Error()
      }
      self.userData = response.data;
    } catch (e) {
      console.warn("user error", e);
    }
  }),
  getUsers() {}
}));

export default UserStore;

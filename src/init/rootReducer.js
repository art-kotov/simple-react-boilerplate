import { combineReducers } from "redux";

//Reducers
import { DomainReducer, usersReducer } from "models/index";

export const rootReducer = combineReducers({
  DomainReducer,
  users: usersReducer
});

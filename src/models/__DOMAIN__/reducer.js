// Types
import { types } from "./types";

const initialState = {};

const DomainReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TYPE:
      return state;

    default:
      return state;
  }
};

export default DomainReducer;

import { LOAD_USER_SUCCESS } from "../constants/action-types";

const rootReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_USER_SUCCESS:
      return action.user;
    default:
      return state;
  }
};

export default rootReducer;
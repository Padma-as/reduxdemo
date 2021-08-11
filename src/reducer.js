import { USER_GET_FAILURE, USER_GET_SUCCESS } from "./Constants";

const getReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_GET_SUCCESS:
      return { ...state, data: action.data };
    case USER_GET_FAILURE:
      return { ...state, data: action.data };
    default:
      return state;
  }
};
export default getReducer;

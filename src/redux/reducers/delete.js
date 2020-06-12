import {
  DELETEUSER,
  DELETEUSER_SUCCESS,
  DELETEUSER_FAILURE,
  LOGOUT,
} from "../actions";

const INITIAL_STATE = {
  isAuthenticated: true,
  username: "",
  //   loading: false,
  error: "",
};

export const deleteUserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DELETEUSER:
      return {
        ...state,
        //loading: true,
      };

    case DELETEUSER_SUCCESS:
      return {
        ...state,
        //loading: false,
        isAuthenticated: false,
        username: action.payload,
      };

    case DELETEUSER_FAILURE:
      return {
        ...state,
        error: action.payload,
        //loading: false,
      };

    case LOGOUT:
      return {
        isAuthenticated: false,
        loading: true,
      };
    default:
      return state;
  }
};

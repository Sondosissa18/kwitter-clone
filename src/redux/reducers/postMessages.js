import {
    CREATE_MESSAGE,
    CREATE_MESSAGE_SUCCESS,
    CREATE_MESSAGE_FAILURE
  } from "../actions";

  const CREATE_MESSAGE_I_STATE = {
    postLoading: false,
    error: ""
  }

  export const createMessageReducer = (state = CREATE_MESSAGE_I_STATE, action) => {
    switch (action.type) {
      case CREATE_MESSAGE:
          return {
            ...CREATE_MESSAGE_I_STATE,
            postLoading: true,
          };
        case CREATE_MESSAGE_SUCCESS:
          return {
            ...CREATE_MESSAGE_I_STATE,
            postLoading: false,
          };
        case CREATE_MESSAGE_FAILURE:
          return {
            ...CREATE_MESSAGE_I_STATE,
            error: action.payload,
            postLoading: false
          };
        default:
          return state;
    }
  }
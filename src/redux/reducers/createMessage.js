import {
    CREATE_MESSAGE,
    CREATE_MESSAGE_SUCCESS,
    CREATE_MESSAGE_FAILURE
  } from "../actions";

  const INITIAL_STATE = {
    postLoading: false,
    error: ""
  }

  export const createMessageReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case CREATE_MESSAGE:
          return {
            ...INITIAL_STATE,
            postLoading: true,
          };
        case CREATE_MESSAGE_SUCCESS:
          return {
            ...INITIAL_STATE,
            postLoading: false,
          };
        case CREATE_MESSAGE_FAILURE:
          return {
            ...INITIAL_STATE,
            error: action.payload,
            postLoading: false
          };
        default:
          return state;
    }
  }
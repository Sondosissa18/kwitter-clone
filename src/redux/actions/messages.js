import api from "../../utils/api";

//CONSTANTS
export const GET_MESSAGES = "MESSAGES/GET_MESSAGES";
export const GET_MESSAGES_SUCCESS = "MESSAGES/GET_MESSAGES_SUCCESS";
export const GET_MESSAGES_FAILURE = "MESSAGES/GET_MESSAGES_FAILURE";
export const CREATE_MESSAGES = "MESSAGES/CREATE_MESSAGES";
export const CREATE_MESSAGES_SUCCESS = "MESSAGES/CREATE_MESSAGES_SUCCESS";
export const CREATE_MESSAGES_FAILURE = "MESSAGES/CREATE_MESSAGES_FAILURE";

//ACTIONS
export const listOfMessages = (credentials) => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_MESSAGES });
    const payload = await api.listOfMessages(credentials);
    dispatch({ type: GET_MESSAGES_SUCCESS, payload });
  } catch (err) {
    dispatch({ type: GET_MESSAGES_FAILURE });
  }
};

export const createMessages = (credentials) => async (dispatch, getState) => {
  try {
    dispatch({ type: CREATE_MESSAGES });
    const payload = await api.createMessages(credentials);
    dispatch({ type: CREATE_MESSAGES_SUCCESS, payload });
  } catch (err) {
    dispatch({ type: CREATE_MESSAGES_FAILURE });
  }
};


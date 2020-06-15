// import api from "../../utils/api";

// export const CREATE_MESSAGE = "MESSAGES/CREATE_MESSAGE";
// export const CREATE_MESSAGE_SUCCESS = "MESSAGES/CREATE_MESSAGE_SUCCESS";
// export const CREATE_MESSAGE_FAILURE = "MESSAGES/CREATE_MESSAGE_FAILURE";

// export const createMessage = (credentials) => async (dispatch, getState) => {
//     try {
//       dispatch({ type: CREATE_MESSAGE });
//       const payload = await api.createMessage(credentials);
//       dispatch({ type: CREATE_MESSAGE_SUCCESS, payload });
//     } catch (err) {
//       dispatch({ type: CREATE_MESSAGE_FAILURE });
//     }
//   };
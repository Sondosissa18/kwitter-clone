import api from "../../utils/api";

// AUTH CONSTANTS
export const LOGIN = "AUTH/LOGIN";
export const LOGIN_SUCCESS = "AUTH/LOGIN_SUCCESS";
export const LOGIN_FAILURE = "AUTH/LOGIN_FAILURE";
export const LOGOUT = "AUTH/LOGOUT";
// export const SIGNUP_FAILURE = "USERS/SIGNUP_FAILURE";
// export const SIGNUP = "USERS/SIGNUP";
// export const GETUSER = "USERS/GETUSER";
// export const GETUSER_FAILURE = "USERS/GETUSER_FAILURE";

/*
 AUTH ACTIONS (this is a thunk....)
 THUNKS: --> https://github.com/reduxjs/redux-thunk#whats-a-thunk
 If you need access to your store you may call getState()
*/
export const login = (credentials) => async (dispatch, getState) => {
  try {
    dispatch({ type: LOGIN });
    const payload = await api.login(credentials);
    // ℹ️ℹ️This is how you woud debug the response to a requestℹ️ℹ️
    // console.log({ result })
    dispatch({ type: LOGIN_SUCCESS, payload });
  } catch (err) {
    dispatch({
      type: LOGIN_FAILURE,
      payload: err.message,
    });
  }
};

export const logout = () => async (dispatch, getState) => {
  try {
    // We do not care about the result of logging out
    // as long as it succeeds
    await api.logout();
  } finally {
    /**
     * Let the reducer know that we are logged out
     */
    dispatch({ type: LOGOUT });
  }
};

// export const createUser = () => async (dispatch, getState) => {
//   try {
//     const payload = await api.createUser();
//     dispatch({ type: SIGNUP, payload });
//   } catch (err) {
//     dispatch({
//       type: SIGNUP_FAILURE,
//       payload: "There was an error on the server",
//     });
//   }
// };

// export const getUser = () => async (dispatch, getState) => {
//   try {
//     const payload = await api.getUser();
//     dispatch({ type: GETUSER, payload });
//   } finally {
//     dispatch({ type: GETUSER_FAILURE });
//   }
// };

// END AUTH ACTIONS

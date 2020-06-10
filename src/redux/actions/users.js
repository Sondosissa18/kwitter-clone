import api from "../../utils/api";

export const SIGNUP_FAILURE = "USERS/SIGNUP_FAILURE";
export const SIGNUP = "USERS/SIGNUP";
export const SIGNUP_SUCCESS = "USERS/SIGNUP_SUCCESS";
export const GETUSER = "USERS/GETUSER";
export const GETUSER_SUCCESS = "USERS/GETUSER_SUCCESS";
export const GETUSER_FAILURE = "USERS/GETUSER_FAILURE";
export const UPDATEUSER = "USERS/UPDATEUSER";
export const UPDATEUSER_SUCCESS = "USERS/UPDATEUSER_SUCCESS";
export const UPDATEUSER_FAILURE = "USERS/UPDATEUSER_FAILURE";
// export const REGISTER_FAILURE = "/users/{username}/REGISTER_FAILURE";
export const DELETEUSER = "USERS/DELETEUSER";
export const DELETEUSER_SUCCESS = "USERS/DELETEUSER_SUCCESS";
export const DELETEUSER_FAILURE = "USERS/DELETEUSER_FAILURE";
//export const DeleteUser = "AUTH/LOGIN_SUCCESS";

export const SETUSERPIC = "USERS/SETUSERPIC";
export const SETUSERPIC_SUCCESS = "USERS/SETUSERPIC_SUCCESS";
export const SETUSERPIC_FAILURE = "USERS/SETUSERPIC_FAILURE";

export const GETUSERPIC = "USERS/GETUSER";
export const GETUSERPIC_SUCCESS = "USERS/GETUSER_SUCCESS";
export const GETUSERPIC_FAILURE = "USERS/GETUSER_FAILURE";

export const getUserPic = (username) => async (dispatch, getState) => {
  try {
    dispatch({ type: GETUSER });
    const payload = await api.getUser();
    dispatch({ type: GETUSER_SUCCESS, payload });
  } catch {
    dispatch({
      type: GETUSER_FAILURE,
      payload: "There was an error on the server",
    });
  }
};

//set profile picture
export const setUserPic = (setUserPicData) => async (dispatch, getState) => {
  try {
    let data = new FormData(setUserPicData);
    let username = getState().auth.login.result;
    let token = getState().auth.login.result;
    dispatch({ type: SETUSERPIC });
    const payload = await api.setUserPic(username, token, data);
    dispatch({ type: SETUSERPIC_SUCCESS, payload });
  } catch {
    dispatch({
      type: SETUSERPIC_FAILURE,
      payload: "There was an error on the server",
    });
  }
};

export const createUser = (username, displayName, password) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({ type: SIGNUP });
    console.log(username, displayName, password);
    const payload = await api.createUser(username, displayName, password);
    dispatch({ type: SIGNUP_SUCCESS, payload });
  } catch (err) {
    dispatch({
      type: SIGNUP_FAILURE,
      payload: "There was an error on the server",
    });
  }
};

export const getUser = () => async (dispatch, getState) => {
  try {
    let username = getState().auth.username;
    dispatch({ type: GETUSER });
    const payload = await api.getUser(username);
    dispatch({ type: GETUSER_SUCCESS, payload });
  } catch {
    dispatch({
      type: GETUSER_FAILURE,
      payload: "There was an error on the server",
    });
  }
};

export const updateUser = () => async (dispatch, getState) => {
  try {
    dispatch({ type: UPDATEUSER });
    const payload = await api.getUser();
    dispatch({ type: UPDATEUSER_SUCCESS, payload });
  } catch {
    dispatch({
      type: UPDATEUSER_FAILURE,
      payload: "There was an error on the server",
    });
  }
};

export const deleteUser = () => async (dispatch, getState) => {
  try {
    dispatch({ type: DELETEUSER });
    const payload = await api.getUser();
    dispatch({ type: DELETEUSER_SUCCESS, payload });
  } catch {
    dispatch({
      type: DELETEUSER_FAILURE,
      payload: "There was an error on the server",
    });
  }
};

// export const deleteUser = () => async (dispatch, getState) => {
//   try {
//     await api.deleteUser();
//   } finally {
//     dispatch({ type: DELETEUSER });
//   }
// };

import api from "../../utils/api"

export const LIKE_MESSAGE = "LIKES/LIKE_MESSAGE"
export const LIKE_MESSAGE_SUCCESS = "LIKES/LIKE_MESSAGE_SUCCESS"
export const LIKE_MESSAGE_FAILURE = "LIKES/LIKE_MESSAGE_FAILURE"
export const DISLIKE_MESSAGE = "LIKES/DISLIKE_MESSAGE"
export const DISLIKE_MESSAGE_SUCCESS = "LIKES/DISLIKE_MESSAGE_SUCCESS"
export const DISLIKE_MESSAGE_FAILURE = "LIKES/DISLIKE_MESSAGE_FAILURE"

export const addLikeAction = (credentials) => async (dispatch, getState) => {
  try {
    dispatch({ type: LIKE_MESSAGE });
    const payload = await api.addLikeAction(credentials);
    console.log(payload)
    dispatch({ type: LIKE_MESSAGE_SUCCESS, payload });
  } catch (err) {
    dispatch({ type: LIKE_MESSAGE_FAILURE });
  }
};

export const deleteLikeAction = (credentials) => async (dispatch, getState) => {
  try {
    await api.deleteLikeAction();
  } finally {
    dispatch({ type: DISLIKE_MESSAGE });
  }
};
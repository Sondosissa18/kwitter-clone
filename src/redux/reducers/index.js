import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { messagesReducer } from "./messages";
import { likeReducer } from "./likes";
import { usersReducer } from "./users";

export default combineReducers({
  auth: authReducer,
  messages: messagesReducer,
  likes: likeReducer,
  users: usersReducer,
});

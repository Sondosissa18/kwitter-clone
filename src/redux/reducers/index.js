import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { messagesReducer } from "./messages";
import { createMessageReducer } from "./createMessage";
import { likeReducer } from "./likes";
import { usersReducer } from "./users";

export default combineReducers({
  auth: authReducer,
  messages: messagesReducer,
  createMessage: createMessageReducer,
  likes: likeReducer,
  users: usersReducer,
});

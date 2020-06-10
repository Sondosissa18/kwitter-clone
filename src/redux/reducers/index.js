import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { usersReducer } from "./users";

export default combineReducers({ auth: authReducer, users: usersReducer });
import { messagesReducer } from "./messages";

export default combineReducers({
  auth: authReducer,
  messages: messagesReducer,
});

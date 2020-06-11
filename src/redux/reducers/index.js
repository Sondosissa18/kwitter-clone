import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { messagesReducer } from "./messages";
import { createMessageReducer } from "./messages";

export default combineReducers({ auth: authReducer, messages: messagesReducer/*, messages: createMessageReducer */ });

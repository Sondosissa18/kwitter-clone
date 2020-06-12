import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { messagesReducer } from "./messages";
import { likeReducer } from "./likes"


export default combineReducers({ auth: authReducer, messages: messagesReducer, likes: likeReducer });

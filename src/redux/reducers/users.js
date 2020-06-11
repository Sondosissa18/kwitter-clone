// TODO: implement
import {
  SIGNUP_FAILURE,
  SIGNUP,
  SIGNUP_SUCCESS,
  GETUSER,
  GETUSER_SUCCESS,
  GETUSER_FAILURE,
  UPDATEUSER,
  UPDATEUSER_FAILURE,
  UPDATEUSER_SUCCESS,
  DELETEUSER,
  DELETEUSER_SUCCESS,
  DELETEUSER_FAILURE,
} from "../actions";
// import { SIGNUP_SUCCESS } from "../actions/users";

const INITIAL_STATE = {
  users: [],
  error: "",
  loading: false,
  currentUser: {},
};

export const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGNUP:
      return {
        ...state,
        loading: true,
      };
    case SIGNUP_SUCCESS:
      return Object.assign({}, state, {
        ...state,
        currentUser: {
          user: {
            username: action.payload.user.username,
            displayName: action.payload.user.displayName,
            about: action.payload.user.about,
            createdAt: action.payload.user.createdAt,
            updatedAt: action.payload.user.updatedAt,
            pictureLocation: action.payload.user.pictureLocation,
            googleId: action.payload.user.googleId,
          },
          statusCode: action.payload.statusCode,
        },
      });

    case SIGNUP_FAILURE:
      return {
        ...INITIAL_STATE,
        error: action.payload,
        loading: false,
      };

    case GETUSER:
      return {
        ...state,
        loading: true,
      };
    case GETUSER_SUCCESS:
      return Object.assign({}, state, {
        ...state,
        users: state.users.concat({
          user: {
            username: action.payload.user.username,
            displayName: action.payload.user.displayName,
            about: action.payload.user.about,
            createdAt: action.payload.user.createdAT,
            updatedAt: action.payload.user.updatedAt,
            pictureLocation: action.payload.user.pictureLocation,
            googleId: action.payload.user.googleId,
          },
          statusCode: action.payload.statusCode,
        }),
        loading: true,
      });

    case GETUSER_FAILURE:
      return {
        ...INITIAL_STATE,
        error: action.payload,
        loading: false,
      };

    case UPDATEUSER:
      return {
        ...state,
        loading: true,
      };
    case UPDATEUSER_SUCCESS:
      return Object.assign({}, state, {
        ...state,
        currentUser: {
          user: {
            username: action.payload.user.username,
            displayName: action.payload.user.displayName,
            about: action.payload.user.about,
            createdAt: action.payload.user.createdAT,
            updatedAt: action.payload.user.updatedAt,
            pictureLocation: action.payload.user.pictureLocation,
            googleId: action.payload.user.googleId,
          },
          statusCode: 0,
        },
      });

    case UPDATEUSER_FAILURE:
      return {
        ...INITIAL_STATE,
        error: action.payload,
        loading: false,
      };

    case DELETEUSER:
      return {
        ...state,
        loading: true,
      };

    case DELETEUSER_SUCCESS:
      return Object.assign({}, state, {
        ...state,
        currentUser: {
          user: {
            username: action.payload.user.username,
            displayName: "",
            about: "",
            createdAt: "",
            updatedAt: "",
            pictureLocation: "",
            googleId: "",
          },
          statusCode: action.payload.statusCode,
        },
      });

    case DELETEUSER_FAILURE:
      return {
        ...INITIAL_STATE,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

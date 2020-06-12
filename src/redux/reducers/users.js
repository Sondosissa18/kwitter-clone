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
  SETUSERPIC,
  SETUSERPIC_SUCCESS,
  SETUSERPIC_FAILURE,
  // DELETEUSER,
  // DELETEUSER_SUCCESS,
  // DELETEUSER_FAILURE,
  // GETUSERPIC,
  // GETUSERPIC_SUCCESS,
  // GETUSERPIC_FAILURE,
  //SETUSER_SUCCESS,
  //LOGOUT,
} from "../actions";
// import { SIGNUP_SUCCESS } from "../actions/users";

const INITIAL_STATE = {
  //isAuthenticated: true,
  accept: "",
  pictureLocation: "",
  createdAt: "",
  updatedAt: "",
  username: "",
  displayName: "",
  about: "",
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

    // case GETUSER_SUCCESS:
    //   return {
    //     ...state,
    //     loading: false,
    //     currentUser: action.payload,
    //   };

    case GETUSER_SUCCESS:
      return {
        ...state,
        // {
        username: action.payload.user.username,
        displayName: action.payload.user.displayName,
        about: action.payload.user.about,
        createdAt: action.payload.user.createdAt,
        updatedAt: action.payload.user.updatedAt,
        pictureLocation: action.payload.user.pictureLocation,
        googleId: action.payload.user.googleId,
        loading: true,
      };

    case GETUSER_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case UPDATEUSER:
      return {
        ...state,
        loading: true,
      };

    case UPDATEUSER_SUCCESS:
      return {
        ...state,
        username: action.payload.user.username,
        displayName: action.payload.user.displayName,
        about: action.payload.user.about,
        createdAt: action.payload.user.createdAt,
        updatedAt: action.payload.user.updatedAt,
        pictureLocation: action.payload.user.pictureLocation,
        googleId: action.payload.user.googleId,

        statusCode: 0,
      };

    case UPDATEUSER_FAILURE:
      return {
        ...INITIAL_STATE,
        error: action.payload,
        loading: false,
      };

    case SETUSERPIC:
      return {
        ...state,
        loading: true,
      };

    case SETUSERPIC_SUCCESS:
      return {
        ...state,
        loading: false,
        //currentUser: action.payload,
      };

    case SETUSERPIC_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    // case DELETEUSER:
    //   return {
    //     ...state,
    //     //loading: true,
    //   };

    // case DELETEUSER_SUCCESS:
    //   return {
    //     ...state,
    //     //loading: false,
    //     isAuthenticated: false,
    //     username: action.payload,
    //   };

    // case DELETEUSER_FAILURE:
    //   return {
    //     ...state,
    //     error: action.payload,
    //     //loading: false,
    //   };

    // case LOGOUT:
    //   return {
    //     isAuthenticated: false,
    //     loading: true,
    //   };

    // case GETUSERPIC:
    //   return {
    //     ...state,
    //     loading: true,
    //   };

    // case GETUSERPIC_SUCCESS:
    //   return {
    //     ...state,
    //     loading: false,
    //     currentUser: action.payload,
    //     accept: action.payload.user.accept,
    //   };

    // case GETUSERPIC_FAILURE:
    //   return {
    //     ...state,
    //     error: action.payload,
    //     loading: false,
    //   };

    // case SETUSER_SUCCESS:
    //   return {
    //     ...state,
    //     ...action.payload,
    //   };

    default:
      return state;
  }
};

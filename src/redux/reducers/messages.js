// TODO: implement
import {
  GET_MESSAGES,
  GET_MESSAGES_SUCCESS,
  GET_MESSAGES_FAILURE,
  // CREATE_MESSAGE,
  // CREATE_MESSAGE_SUCCESS,
  // CREATE_MESSAGE_FAILURE
} from "../actions";

const INITIAL_STATE = {
  messages: {
    id: 0,
    text: "",
    username: "",
    createdAt: "",
    likes: 0,
  },
  text: "",
  postLoading: false,
  loading: false,
  error: ""
};

// const CREATE_MESSAGE_I_STATE = {
//   postLoading: false,
//   error: ""
// }

export const messagesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_MESSAGES:
      return {
        ...INITIAL_STATE,
        loading: true,
      };
    case GET_MESSAGES_SUCCESS:
      const { messages } = action.payload;
      return {
        ...INITIAL_STATE,
        messages,
        loading: false,
      };
    case GET_MESSAGES_FAILURE:
      return {
        ...INITIAL_STATE,
        error: action.payload,
        loading: false,
      };
      // case CREATE_MESSAGE:
      //   return {
      //     ...INITIAL_STATE,
      //     postLoading: true,
      //   };
      // case CREATE_MESSAGE_SUCCESS:
      //   return {
      //     ...INITIAL_STATE,
      //     postLoading: false,
      //   };
      // case CREATE_MESSAGE_FAILURE:
      //   return {
      //     ...INITIAL_STATE,
      //     error: action.payload,
      //     postLoading: false
      //   };
      default:
        return state;
  }
};

// export const createMessageReducer = (state = CREATE_MESSAGE_I_STATE, action) => {
//   switch (action.type) {
//     case CREATE_MESSAGE:
//         return {
//           ...INITIAL_STATE,
//           postLoading: true,
//         };
//       case CREATE_MESSAGE_SUCCESS:
//         return {
//           ...INITIAL_STATE,
//           postLoading: false,
//         };
//       case CREATE_MESSAGE_FAILURE:
//         return {
//           ...INITIAL_STATE,
//           error: action.payload,
//           postLoading: false
//         };
//       default:
//         return state;
//   }
// }
// TODO: implement
import {
    LIKE_MESSAGE,
    LIKE_MESSAGE_SUCCESS,
    LIKE_MESSAGE_FAILURE
} from "../actions"


const INITIAL_STATE = {
    like: {
        id: 0,
        username: "",
        messageId: 0,
        createdAt: ""
    },
    loading: false,
    error: ""
}

export const likeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LIKE_MESSAGE:
            return {
                ...INITIAL_STATE,
                loading: true
            }
        case LIKE_MESSAGE_SUCCESS:
            const like = action.payload
            return {
                ...INITIAL_STATE,
                like,
                loading: false
            }
        case LIKE_MESSAGE_FAILURE:
            return {
                ...INITIAL_STATE,
                error: action.payload,
                loading: false
            }
    }
}
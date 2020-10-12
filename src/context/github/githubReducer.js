import { CLEAR_USERS, GET_REPOS, GET_USER, SEARCH_USERS, SET_LOADING } from "../types"

const handlers = {
    [SEARCH_USERS]: (state, action) => {
        return {
            ...state,
            users: action.payload,
            loading: false
        }
    },
    [GET_REPOS]: (state, action) => {
        return {
            ...state,
            repos: action.payload,
            loading: false
        }
    },
    [GET_USER]: (state, action) => {
        return {
            ...state,
            user: action.payload
        }
    },

    [SET_LOADING]: (state) => {
        return {
            ...state,
            loading: true
        }
    },
    [CLEAR_USERS]: (state) => {
        return {
            ...state,
            users: []
        }
    },
    DEFAULT: state => state 
}



export const githubReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
} 
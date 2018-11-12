import { CHANGE_SECONDS, CHANGE_PAGE, INCREMENT_SECONDS, INCREMENT_PAGE } from './constants'

const initialState = {
    secondsPerPage: 45,
    currentPage: 1
}

export const readingBoosterReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case INCREMENT_SECONDS:
            return { ...state, secondsPerPage: Number(state.secondsPerPage) + action.payload }
        case INCREMENT_PAGE:
            return { ...state, currentPage: Number(state.currentPage) + action.payload }
        case CHANGE_SECONDS:
            return { ...state, secondsPerPage: Math.max(1, Number(action.payload)) }
        case CHANGE_PAGE:
            return { ...state, secondsPerPage: Math.max(1, Number(action.payload)) }
        default:
            return state;
    }
}
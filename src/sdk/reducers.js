import {
  CHANGE_SECONDS,
  CHANGE_PAGE,
  INCREMENT_SECONDS_PER_PAGE,
  DECREMENT_SECONDS_TIMER,
  INCREMENT_PAGE,
  TOGGLE_TIMER_STATE,
  RESET_SECONDS_TIMER
} from "./constants";

const initialState = {
  secondsPerPage: 45,
  currentTimerSeconds: 45,
  currentPage: 1,
  isRunning: false
};

export const readingBoosterReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case INCREMENT_SECONDS_PER_PAGE:
      return {
        ...state,
        secondsPerPage: Number(state.secondsPerPage) + action.payload,
        currentTimerSeconds: Number(state.secondsPerPage) + action.payload
      };
    case INCREMENT_PAGE:
      return {
        ...state,
        currentPage: Number(state.currentPage) + action.payload
      };
    case CHANGE_SECONDS:
      return {
        ...state,
        secondsPerPage: Math.max(1, Number(action.payload)),
        currentTimerSeconds: Math.max(1, Number(action.payload))
      };
    case DECREMENT_SECONDS_TIMER:
      return { ...state, currentTimerSeconds: state.currentTimerSeconds - 1 };
    case RESET_SECONDS_TIMER:
      return { ...state, currentTimerSeconds: state.secondsPerPage };
    case CHANGE_PAGE:
      return { ...state, currentPage: Math.max(1, Number(action.payload)) };
    case TOGGLE_TIMER_STATE:
      return { ...state, isRunning: !state.isRunning };
    default:
      return state;
  }
};

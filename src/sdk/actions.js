import {
  CHANGE_SECONDS,
  CHANGE_PAGE,
  INCREMENT_SECONDS_PER_PAGE,
  INCREMENT_PAGE,
  TOGGLE_TIMER_STATE,
  DECREMENT_SECONDS_TIMER,
  RESET_SECONDS_TIMER
} from "./constants";

export const changeSeconds = changeValue => ({
  type: CHANGE_SECONDS,
  payload: changeValue
});

export const changeCurrentPage = changeValue => ({
  type: CHANGE_PAGE,
  payload: changeValue
});

export const decrementTimerSeconds = () => ({
  type: DECREMENT_SECONDS_TIMER,
  payload: ""
});

export const resetSecondsTimer = () => ({
  type: RESET_SECONDS_TIMER,
  payload: ""
});

export const incrementSecondsPerPage = changeValue => ({
  type: INCREMENT_SECONDS_PER_PAGE,
  payload: changeValue
});

export const incrementCurrentPage = changeValue => ({
  type: INCREMENT_PAGE,
  payload: changeValue
});

export const toggleTimerState = () => ({
  type: TOGGLE_TIMER_STATE,
  payload: ""
});

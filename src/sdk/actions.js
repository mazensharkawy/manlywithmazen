import { CHANGE_SECONDS, CHANGE_PAGE, INCREMENT_SECONDS, INCREMENT_PAGE } from './constants'

export const changeSeconds = (changeValue) => ({
    type: CHANGE_SECONDS,
    payload: changeValue
})

export const changeCurrentPage = (changeValue) => ({
    type: CHANGE_PAGE,
    payload: changeValue
})

export const incrementSecondsPerPage = (changeValue) => ({
    type: INCREMENT_SECONDS,
    payload: changeValue
})

export const incrementCurrentPage = (changeValue) => ({
    type: INCREMENT_PAGE,
    payload: changeValue
})
import * as types from './types'

export const toggleTheme = () => (dispatch) => {
    dispatch({
        type: types.APPLICATION.TOGGLE_THEME
    })
}

export const setLanguage = (code) => (dispatch) => {
    dispatch({
        type: types.APPLICATION.SET_LANGUAGE,
        payload: code
    })
}
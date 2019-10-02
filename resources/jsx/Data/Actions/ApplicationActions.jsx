import * as types from './types'

export const toggleTheme = () => (dispatch) => {
    dispatch({
        type: types.APPLICATION.TOGGLE_THEME
    })
}
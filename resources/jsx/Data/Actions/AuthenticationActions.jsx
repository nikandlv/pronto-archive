import * as types from './types'

export const init = () => (dispatch) => {
  dispatch({
    type: types.AUTHENTICATION.INIT
  })
}

export const signIn = () => (dispatch) => {
  dispatch({
    type: types.AUTHENTICATION.SIGN_IN
  })
}

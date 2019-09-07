import * as types from './types'

export const init = () => (dispatch) => {
  dispatch({
    type: types.AUTHENTICATION.INIT
  })
}

import * as types from './types'

export const increaseBy = (number) => (dispatch) => {
    dispatch({
        type:types.INCREASE_BY,
        payload: number
    })
}


export const decreaseBy = (number) => (dispatch) => {
    dispatch({
        type:types.DECREASE_BY,
        payload: number
    })
}

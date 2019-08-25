import * as types from '../Actions/types'

const initialState = {
    counter: 0
}

export default function CounterReducer(state = initialState,action) {
    switch(action.type) {
        case types.INCREASE_BY:
            return {
                ...state,
                counter: state.counter + action.payload
            }
        case types.DECREASE_BY:
            return {
                ...state,
                counter: state.counter - action.payload
            }
        default:
            return state;
    }
}
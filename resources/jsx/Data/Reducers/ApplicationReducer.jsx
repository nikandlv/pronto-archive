import * as types from '../Actions/types'

const initialState = {
    name: 'Pronto',
    theme: 'light'
}

export default function ApplicationReducer(state = initialState,action) {
    switch(action.type) {
        case types.APPLICATION.TOGGLE_THEME: 
            return {
                ...state,
                theme: state.theme === 'light' ? 'dark' : 'light'
            }
            break;
    }
    return state;
}
import { SET_AUTH, SET_UNAUTH } from '../actions/authActions';

const initialState = {
    user: null
}

export function authReducer(state = initialState, action) {
    switch (action.type) {
        case SET_AUTH:
            return {
                user: action.payload
            }
        case SET_UNAUTH:
            return {
                user: null
            }
        default:
            return state;
    }
}
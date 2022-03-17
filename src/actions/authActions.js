import { fetchStart, fetchEnd, fetchError } from './statusActions';
import { signin } from '../data/users'

export const SET_AUTH = 'SET_AUTH';
export const SET_UNAUTH = 'SET_UNAUTH';

export function setAuth(user) {
    return {
        type: SET_AUTH,
        payload: user
    }
}

export function setUnAuth() {
    return {
        type: SET_UNAUTH
    }
}



export function fetchAuthAsync(email, password){
    return async function(dispatch, getState) {
        dispatch(fetchStart());
        try {
           dispatch(fetchStart());

           const user = await signin(email, password);

           if(user){
               dispatch(setAuth(user));
               dispatch(fetchError(''));
                dispatch(fetchEnd());
           }


        } catch (error) {
            dispatch(setAuth(null));
            dispatch(fetchError(error));
            dispatch(fetchEnd());
          
        }
    }
}
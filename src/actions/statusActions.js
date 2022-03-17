export const FETCH_START = 'FETCH_START';
export const FETCH_END = 'FETCH_END';
export const FETCH_ERROR = 'FETCH_ERROR';

export function fetchStart() {
    return {
        type: FETCH_START
    }
}

export function fetchEnd() {
    return {
        type: FETCH_END
    }
}

export function fetchError(error) {
    return {
        type: FETCH_ERROR,
        payload: error
    }
}
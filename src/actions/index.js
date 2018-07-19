import axios from 'axios';

const ROOT_URL = `https://intelligent-mandarine-90254.herokuapp.com/`;

export const FETCH_TEMPCONV = 'FETCH_TEMPCONV';
export const FETCH_WEIGHTCONV = 'FETCH_WEIGHTCONV';
export const FETCH_MEASURECONV = 'FETCH_MEASURECONV';
export const FETCH_FEETMETERSCONV = 'FETCH_FEETMETERSCONV';

export function fetchTempConv(number) {
    const url = `${ROOT_URL}temp/${number}`;
    const request = axios.get(url);
    console.log(request)

    return {
        type: FETCH_TEMPCONV,
        payload: request
    };
}

export function fetchWeightConv(number) {
    const url = `${ROOT_URL}weight/${number}`;
    const request = axios.get(url);
    console.log(request)

    return {
        type: FETCH_WEIGHTCONV,
        payload: request
    };
}

export function fetchMeasureConv(number) {
    const url = `${ROOT_URL}measure/${number}`;
    const request = axios.get(url);
    console.log(request)

    return {
        type: FETCH_MEASURECONV,
        payload: request
    };
}

export function fetchFeetMetersConv(number) {
    const url = `${ROOT_URL}feetmeters/${number}`;
    const request = axios.get(url);
    console.log(request)

    return {
        type: FETCH_FEETMETERSCONV,
        payload: request
    };
}
/*
export const REQUEST_API_DATA = 'REQUEST_API_DATA';
export const REQUEST_API_DATA_SUCCEEDED = 'REQUEST_API_DATA_SUCCEEDED';
export const REQUEST_API_DATA_FAILED = 'REQUEST_API_DATA_FAILED';
export const FETCH_API_DATA = 'FETCH_API_DATA';

export const requestApiData = () => {
    return { type: 'REQUEST_API_DATA' }
};

export const requestApiDataSuccess = (data) => {
    return { type: 'REQUEST_API_DATA_SUCCEEDED', url: data }
};

export const requestApiDataError = () => {
    return { type: 'REQUEST_API_DATA_FAILED' }
};

export const fetchApiData = () => {
    return { type: 'FETCH_API_DATA' }
};

*/
export const REQUEST_API_DATA = "REQUEST_API_DATA";
export const RECEIVE_API_DATA = "RECEIVE_API_DATA";

export const requestApiData = () => ({ type: REQUEST_API_DATA });
export const receiveApiData = data => ({ type: RECEIVE_API_DATA, data });
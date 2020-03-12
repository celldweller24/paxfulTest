/*
import { REQUEST_API_DATA,
         REQUEST_API_DATA_SUCCEEDED,
         REQUEST_API_DATA_FAILED } from "./actions";

const initialState = {
    url: '',
    loading: false,
    error: false,
};
export default (state = initialState, action) => {
    switch (action.type) {
        case 'REQUEST_API_DATA':
            return {
                url: '',
                loading: true,
                error: false,
            };
        case 'REQUEST_API_DATA_SUCCEEDED':
            return {
                url: action,
                loading: false,
                error: false,
            };
        case 'REQUEST_API_DATA_FAILED':
            return {
                url: '',
                loading: false,
                error: true,
            };
        default:
            return state;
    }
};*/

import { RECEIVE_API_DATA } from "./actions";

export default (state = {}, { type, data }) => {
    switch (type) {
        case RECEIVE_API_DATA:
            return data;
        default:
            return state;
    }
};
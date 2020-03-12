import { REQUEST_API_DATA, receiveApiData } from "./actions";
import { call, put, takeEvery } from "redux-saga/effects";
import { fetchDataAsync } from './api';

/*function* fetchApiDataAsync() {
    try {
        yield put(requestApiData());
        const data = yield call(() => {
                return fetch('api/data')
                    .then(response => response.json())
            }
        );
        yield put(requestApiDataSuccess(data));
    } catch (error) {
        yield put(requestApiDataError());
    }
}*/

function* getApiData() {
    try {
        const data = yield call(fetchDataAsync);
        yield put(receiveApiData(data));
    } catch (e) {
        console.log(e);
    }
}

export default function* watchFetchApiData() {
    yield takeEvery('REQUEST_API_DATA', getApiData);
}
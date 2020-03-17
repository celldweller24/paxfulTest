import { REQUEST_API_DATA, receiveApiData } from "./actions";
import { call, put, takeEvery } from "redux-saga/effects";
import { fetchDataAsync } from './api';

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
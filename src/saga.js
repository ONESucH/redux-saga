import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import Api from './api/Api';

function* fetchUser(action) {
    console.log('action', action);
    try {
        const data = yield call(Api.fetchUser, action.payload);
        yield put({
            type: 'USER_FETCH_SUCCESS',
            data: data
        });
    } catch (e) {
        yield put({type: 'USER_FETCH_ERROR', message: e.message});
    }
}

function* mySaga() {
    yield takeLatest('USER_FETCH_REQUESTED', fetchUser);
}

export default mySaga;
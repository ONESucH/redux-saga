import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
//import Api from '...'
import {REQUEST_HELLO_WORLD, recieveHelloWorld} from './actions/actions';


function* helloWorld(action) {
  try {
    //const user = yield call(Api.fetchUser, action.payload.userId);
    yield put(recieveHelloWorld('hello world saga.js!!'));
  } catch (e) {
    yield put(recieveHelloWorld('Is not hello world saga.js!!'));
  }
}

export default function* mySaga() {
  yield takeLatest(REQUEST_HELLO_WORLD, helloWorld);
}
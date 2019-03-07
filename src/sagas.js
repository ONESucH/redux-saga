import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import Api from './api/Api'
import {REQUEST_HELLO_WORLD, recieveHelloWorld} from './actions/actions';

function* helloWorld(action) {
  try {
    const dog = put(yield Api.getDogsRequest());
    const saveObj = dog.payload.action; 
    console.log('saveObj', saveObj);
    yield put(recieveHelloWorld('hello world saga.js!!', saveObj));
  } catch (e) {
    yield put(recieveHelloWorld('Is not hello world saga.js!!', e));
  }
}

export default function* mySaga() {
  yield takeLatest(REQUEST_HELLO_WORLD, helloWorld);
}
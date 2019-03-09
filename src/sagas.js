import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import Api from './api/Api';
import {REQUEST_HELLO_WORLD, recieveHelloWorld} from './actions/actions';
import {DOG_REQUEST, dogRecieve} from './actions/actions-dog-request';

// WRITE TEXT - HELLO WORLD
function* helloWorld(action) {
  console.log('helloWorld');
  try {
    yield put(recieveHelloWorld('hello world saga.js!!'));
  } catch (e) {
    yield put(recieveHelloWorld('Is not hello world saga.js!!', e));
  }
}

// Dog request
function* dogRequestTemplate() {
  console.log('dogRequestTemplate');
  try {
    const dog = put(yield Api.getDogsRequest());
    const saveObj = dog.payload.action;
    console.log('saveObj', saveObj);
    yield put(dogRecieve(saveObj));
  } catch (err) {
    yield put(dogRecieve(err));
  }
}

// WATCHERS
export default function* mySaga() {
  yield takeLatest(REQUEST_HELLO_WORLD, helloWorld);
  yield takeLatest(DOG_REQUEST, dogRequestTemplate);
}
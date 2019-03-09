import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import Api from './api/Api';
import {REQUEST_HELLO_WORLD, recieveHelloWorld} from './actions/actions';
import {DOG_REQUEST, dogRecieve} from './actions/actions-dog-request';

// WRITE TEXT - HELLO WORLD
function* helloWorld(action) {
  try {
    yield put(recieveHelloWorld('hello world saga.js!!'));
  } catch (e) {
    yield put(recieveHelloWorld('Is not hello world saga.js!!', e));
  }
}

// Dog request
function* dogRequestTemplate(action) {
  try {
    const dog = put(yield Api.getDogsRequest());
    yield put(dogRecieve(dog.payload.action));
  } catch (err) {
    yield put(dogRecieve(err));
  }
}

// WATCHERS
export default function* mySaga() {
  yield takeLatest(REQUEST_HELLO_WORLD, helloWorld);
  yield takeEvery(DOG_REQUEST, dogRequestTemplate);
}
import {put, call, takeLatest} from 'redux-saga/effects';
import Api from './api/Api';
import {
  REQUEST_HELLO_WORLD,

  successHelloWorld,
  errHelloWorld
} from './actions/actions';

function* getDogs() {
  try {
    const requestDogs = yield Api.getDogsRequest();
    yield put(successHelloWorld(requestDogs));
  } catch (err) {
    yield put(errHelloWorld(err));
  }
}
 
function* mySagaWatcher() {
  yield takeLatest(REQUEST_HELLO_WORLD, getDogs);
}

export default (
  mySagaWatcher 
);
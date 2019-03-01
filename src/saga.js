import {put, race, takeLatest} from 'redux-saga/effects';
import {
  REQUEST_HELLO_WORLD,
  recieveHelloWorld
} from './actions/actions';
import Api from './api/Api';

function* getDogs() {
  try {
    yield put({
      type: REQUEST_HELLO_WORLD,
      data: recieveHelloWorld(yield race(Api.getDogs())),
    });
  } catch (e) {
    yield put(recieveHelloWorld);
  }
}
 
function* mySaga() {
  yield takeLatest(REQUEST_HELLO_WORLD, getDogs);
}

export default (
  mySaga 
);
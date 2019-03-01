import {put, race, takeLatest} from 'redux-saga/effects';
import {
  REQUEST_HELLO_WORLD,
  recieveHelloWorld,
  requestHelloWorld
} from './actions/actions';
import Api from './api/Api';

function* getDogs() {
  try {
    const data = yield requestHelloWorld(yield Api.getDogsRequest());
    console.log('data', data);
  } catch (e) {
    console.log('Not Work', e);
  }
}
 
function* mySaga() {
  yield takeLatest(REQUEST_HELLO_WORLD, getDogs);
}

export default (
  mySaga 
);
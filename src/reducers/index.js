import {combineReducers} from 'redux';

import helloWorld from './helloworld';
import dogRequest from './dogRequest';

export default combineReducers({
  helloWorld,
  dogRequest
});

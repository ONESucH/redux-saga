import {
  REQUEST_HELLO_WORLD,
  SUCCESS_HELLO_WORLD,
  ERR_HELLO_WORLD
} from '../actions/actions';

export default (state = '', action) => {
  console.log('action', action);
  switch (action.type) {
    case REQUEST_HELLO_WORLD:
      return ({
        type: REQUEST_HELLO_WORLD,
        data: action.data
      });
    case SUCCESS_HELLO_WORLD:
      return {
        type: SUCCESS_HELLO_WORLD,
        data: action.data
      };
    case ERR_HELLO_WORLD:
      return {
        type: ERR_HELLO_WORLD,
        err: action.err
      };
    default:
      return state;
  }
}
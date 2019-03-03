import {
  REQUEST_HELLO_WORLD,
  SUCCESS_HELLO_WORLD,
  ERR_HELLO_WORLD
} from '../actions/actions';

const defaultStateReducer = {
  data: {
    status: false,
    message: 'Default state'
  }
};

export default (state = defaultStateReducer, action) => {
  console.log('action', action);
  switch (action.type) {
    case REQUEST_HELLO_WORLD:
      return ({
        type: REQUEST_HELLO_WORLD,
        ...action
      });
    case SUCCESS_HELLO_WORLD:
      return {
        type: SUCCESS_HELLO_WORLD, 
        ...action
      };
    case ERR_HELLO_WORLD:
      return {
        type: ERR_HELLO_WORLD,
        ...action
      };
    default:
      return state;
  }
}
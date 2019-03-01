import {REQUEST_HELLO_WORLD} from '../actions/actions';

export default (state = '', {type, data}) => {
  switch (type) {
    case REQUEST_HELLO_WORLD:
      return {
        type: type,
        data: data
      };
    default:
      return state;
  }
}
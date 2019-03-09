import { DOG_RECIEVE } from '../actions/actions-dog-request';

export default (state = {}, {type, arr}) => {
  console.log('------>>type', type);
  console.log('------>>arr', arr);
  switch (type) {
    case DOG_RECIEVE:
      return arr;
    default:
      return state;
  }
}
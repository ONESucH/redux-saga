export const REQUEST_HELLO_WORLD = 'REQUEST_HELLO_WORLD';
export const RECIEVE_HELLO_WORLD = 'REQUEST_HELLO_WORLD';
export const ERR_HELLO_WORLD = 'ERR_HELLO_WORLD';

export const recieveHelloWorld = (state) => {
  return {
    type: RECIEVE_HELLO_WORLD,
    data: state.data
  }
};

export const requestHelloWorld = (state) => {
  return ({
    type: REQUEST_HELLO_WORLD,
    data: state
  })
};

export const errHelloWorld = () => {
  return {
    type: ERR_HELLO_WORLD
  }
};
export const REQUEST_HELLO_WORLD = 'REQUEST_HELLO_WORLD';
export const SUCCESS_HELLO_WORLD = 'SUCCESS_HELLO_WORLD';
export const ERR_HELLO_WORLD = 'ERR_HELLO_WORLD';

export const requestHelloWorld = (data) => ({
  type: REQUEST_HELLO_WORLD,
  data
});

export const successHelloWorld = (data) => ({
  type: SUCCESS_HELLO_WORLD,
  data 
});

export const errHelloWorld = (err) => ({
  type: ERR_HELLO_WORLD,
  err
});
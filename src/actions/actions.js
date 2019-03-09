export const REQUEST_HELLO_WORLD = 'REQUEST_HELLO_WORLD';
export const RECIEVE_HELLO_WORLD = 'RECIEVE_HELLO_WORLD';

export const requestHelloWorld = () => ({
  type: REQUEST_HELLO_WORLD
});

export const recieveHelloWorld = (text, data) => ({
  type: RECIEVE_HELLO_WORLD, 
  text,
  data
});
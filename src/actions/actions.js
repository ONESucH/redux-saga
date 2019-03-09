export const REQUEST_HELLO_WORLD = 'REQUEST_HELLO_WORLD';
export const RECIEVE_HELLO_WORLD = 'RECIEVE_HELLO_WORLD';

export const requestHelloWorld = () => ({
  type: REQUEST_HELLO_WORLD
});

export const recieveHelloWorld = (text, arr) => {
  console.log('recieveHelloWorld text', text);
  console.log('recieveHelloWorld arr', arr);
  return {
    type: RECIEVE_HELLO_WORLD,
    text,
    arr
  }
};
export const DOG_REQUEST = 'DOG_REQUEST';
export const DOG_RECIEVE = 'DOG_RECIEVE';

export const dogRequest = () => ({
  type: DOG_REQUEST
});

export const dogRecieve = (arr) => {
  console.log('dogRecieve arr', arr);
  return {
    type: DOG_RECIEVE,
    arr
  }
};
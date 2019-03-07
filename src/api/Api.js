export default {
  getDogsRequest: () => {
    return fetch('https://dog.ceo/api/breeds/image/random')
      .then((res) => res.json())
      .then((result) => result)
      .catch((err) => err)
  }
}
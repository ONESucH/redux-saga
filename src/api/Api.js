export default ({
  getDogs: () => {
    return fetch('https://dog.ceo/api/breeds/image/random')
      .then((res) => { return res.json() })
      .then((result) => { return result })
      .catch((err) => err)
  }
})
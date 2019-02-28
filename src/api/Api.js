export default ({
    fetchUser: (data) => {
        console.log('fetchUser', data);
        fetch('https://dog.ceo/api/breeds/image/random')
            .then((res) => { return res.json() })
            .then((result) => { return result })
            .catch((err) => err)
    }
})
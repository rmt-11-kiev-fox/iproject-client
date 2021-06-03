const axios = require('axios')

const instanceAxios = axios.create({
  baseURL: 'https://lelangaja.herokuapp.com/'
})

module.exports = { instanceAxios }

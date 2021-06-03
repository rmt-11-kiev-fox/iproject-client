const axios = require('axios')

const instanceAxios = axios.create({
  baseURL: 'http://lelangaja.herokuapp.com/'
})

module.exports = { instanceAxios }

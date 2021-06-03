const axios = require('axios')

const instance = axios.create({
  baseURL: 'https://beehive-server-iproject.herokuapp.com'
})

module.exports = instance

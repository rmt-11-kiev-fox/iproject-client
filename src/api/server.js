const axios = require('axios');

const instance = axios.create({
    baseURL: 'http://localhost:3000' // development environtment
    // baseURL: '' // production environtment
})

export default instance
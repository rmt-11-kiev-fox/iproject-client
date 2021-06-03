const axios = require('axios');

const instance = axios.create({
    // baseURL: 'http://localhost:3000' // development environtment
    baseURL: 'https://novizh-medicio.herokuapp.com' // production environtment
})

export default instance
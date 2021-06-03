import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:3000' // local testing
    // baseURL: 'https://triviasiks.herokuapp.com' // deploy url
})

export default instance

import axios from 'axios'

let instance = axios.create({
  // baseURL: 'https://e-commerce-server-jho.herokuapp.com/'
  baseURL: 'http://localhost:3000'
})

export default instance
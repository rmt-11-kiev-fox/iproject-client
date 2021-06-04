import axios from 'axios'

let instance = axios.create({
  // baseURL: 'https://fitness-trainer-jho.herokuapp.com'
  baseURL: 'http://localhost:3000'
})

export default instance
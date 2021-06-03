import axios from 'axios'

const axious = axios.create({
  // baseURL: 'http://localhost:3000'
  baseURL: 'https://i-project-berjalan.herokuapp.com'
})

export default axious

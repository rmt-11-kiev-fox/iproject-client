import axios from 'axios'

// export default axios.create({
//   baseURL: 'http://localhost/3000'
// })

const instance = axios.create({
  baseURL: 'http://localhost:3000'
})

export default instance
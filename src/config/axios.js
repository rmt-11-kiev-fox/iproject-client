import axios from 'axios'

const instence = axios.create({
    baseURL: 'https://dangerlist.herokuapp.com/'
})

export default instence
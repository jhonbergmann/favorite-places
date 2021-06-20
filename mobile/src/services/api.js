import axios from 'axios'

const api = axios.create({
  baseURL: 'http://192.168.0.103:3333' /* YOUR LOCAL IP HERE */
})

export default api
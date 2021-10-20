import axios from 'axios'

const API = axios.create({
  baseURL: 'http://localhost:3333',
})

export const setAPIToken = (token: string, api = API) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`
}

export default API

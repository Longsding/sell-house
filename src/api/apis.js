import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000'

export const userlogin = (params) => axios.post('/login', params)

export const gethomelist = () => axios.get('/getHouseList')
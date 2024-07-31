import axios from 'axios'

export const getUsers=(query)=>axios.get(`https://dummyjson.com/users${query}`)
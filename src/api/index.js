import axios from 'axios'

export const getUsers=(query)=>axios.get(`https://dummyjson.com/users${query}`)
export const filterSortUsers=(query)=>axios.get(`https://dummyjson.com/users${query}`)
export const searchUser=(data)=>axios.get("https://dummyjson.com/users/filter/",data)
import axios from "axios"

export default axios.create({
    baseURL: 'https://api.exchangerate.host/latest?base=USD',
    params:{
        method: "GET"
    }
})
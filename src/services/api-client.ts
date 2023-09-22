import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params: {
        key: 'ADD-YOUR-RAWG-API-KEY-HERE'
    }
})
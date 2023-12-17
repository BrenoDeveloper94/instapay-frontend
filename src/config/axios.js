import axios from "axios"

const base_url = import.meta.env.VITE_REACT_BASE_URL

const https = axios.create({
    baseURL: base_url
})

export default https
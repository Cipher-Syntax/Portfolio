import axios from 'axios'

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "https://portfolio-w4zo.onrender.com/"
})

export default api
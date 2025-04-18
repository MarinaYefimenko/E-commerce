//future authorization logic

import axios from "axios";
import { getContentType } from "./api.helper";
const instance = axios.create({
    baseURL: process.env.SERVER_URL,
    headers: getContentType()
})

instance.interceptors.request.use((async (config: any) => {
    const token = localStorage.getItem('token')
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}))

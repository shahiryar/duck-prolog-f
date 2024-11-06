"use client"

import { decrypt, encrypt } from "@/security/encryption"

import { Token } from "@/constants/constants"

import axios from "axios"

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
})

api.interceptors.request.use(axios => {
    const token = localStorage.getItem(Token.AccessToken)
    if(token) axios.headers.Authorization = token
    if(axios.data) {
        axios.data = { payload: encrypt(JSON.stringify(axios.data)) }
    }
    return axios
})

api.interceptors.response.use(axios => {
    if(typeof axios?.data?.payload === "string")
        axios.data = decrypt(axios.data.payload)
    return axios
})

export default api

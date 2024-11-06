"use client"

import { TGetUserService, TLoginService, TSignupService } from "@/types/services"

import api from "./api"

export const login: TLoginService = async(payload) => {
    const { data } = await api.post("/users/login", payload)
    return data
}

export const signup: TSignupService = async(payload) => {
    const { data } = await api.post("/users/signup", payload)
    return data
}

export const getUser: TGetUserService = async() => {
    const { data } = await api.get("/users")
    return data
}

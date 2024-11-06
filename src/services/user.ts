"use client"

import { TLoginService } from "@/types/services"

import api from "./api"

export const login: TLoginService = async(payload) => {
    const { data } = await api.post("/users/login", payload)
    return data
}

export const signup = async() => {}

export const getUser = async() => {}

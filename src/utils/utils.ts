"use client"

import { Token } from "@/constants/constants"

export const getToken = () => localStorage.getItem(Token.AccessToken)

export const removeToken = () => localStorage.removeItem(Token.AccessToken)

export const setToken = (token: string) => localStorage.setItem(Token.AccessToken, token)


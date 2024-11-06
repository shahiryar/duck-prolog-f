"use client"

import { decrypt, encrypt } from "@/security/encryption"

import { Token } from "@/constants/constants"

export const getToken = () => {
    const encrypted = localStorage.getItem(Token.AccessToken)
    if(encrypted) {
        const decrypted: string = decrypt(encrypted)
        return decrypted
    }
    return ""
}

export const removeToken = () => localStorage.removeItem(Token.AccessToken)

export const setToken = (token: string) => {
    const encrypted = encrypt(token)
    if(typeof encrypted === "string") localStorage.setItem(Token.AccessToken, encrypted)
}

"use client"

import { AES, enc, mode, pad } from "crypto-js"

export const encrypt = (data: string) => {
    try {
        const key = enc.Utf8.parse(process.env.NEXT_PUBLIC_AES_KEY as string)
        const iv = enc.Utf8.parse(process.env.NEXT_PUBLIC_AES_IV as string)
        const encryptedData = AES.encrypt(data, key, {
          mode: mode.CBC,
          padding: pad.Pkcs7,
          iv: iv,
        })
        return encryptedData.toString()
    }catch (error) {
        console.error(error)
        return {}
    }
}

export const decrypt = (encryptedData: string) => {
    try {
        const key = enc.Utf8.parse(process.env.NEXT_PUBLIC_AES_KEY as string)
        const iv = enc.Utf8.parse(process.env.NEXT_PUBLIC_AES_IV as string)
        const decryptedData = AES.decrypt(encryptedData, key, {
          mode: mode.CBC,
          padding: pad.Pkcs7,
          iv: iv,
        }).toString(enc.Utf8)
        try {
            return JSON.parse(decryptedData)
        } catch (error) {
            return decryptedData
        }
    } catch (error) {
        console.error(error)
        return {}
    }
}


"use client"

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"

import { getUser, login, signup } from "@/services/user"

import { setToken } from "@/utils/utils"


export const useLogin = () => {
    const client = useQueryClient()

    const onSuccess = (token: string) => {
        setToken(token)
        client.invalidateQueries({
            predicate: ({ queryKey }) => queryKey[0] === "getUser"
        })
    }

    const onError = (error: any) => {
        if(error?.response?.data?.message) {
            toast.dismiss()
            toast.error(error?.response?.data?.message)
        }
        console.error(error)
    }

    const { mutate, isPending } = useMutation({
        mutationFn: login,
        onSuccess,
        onError
    })

    return { login: mutate, isLoggingIn: isPending }
}

export const useSignup = () => {
    const client = useQueryClient()

    const onSuccess = (token: string) => {
        setToken(token)
        client.invalidateQueries({
            predicate: ({ queryKey }) => queryKey[0] === "getUser"
        })
    }

    const onError = (error: any) => {
        if(error?.response?.data?.message) {
            toast.dismiss()
            toast.error(error?.response?.data?.message)
        }
        console.error(error)
    }

    const { mutate, isPending } = useMutation({
        mutationFn: signup,
        onSuccess,
        onError
    })

    return { signup: mutate, isSigningUp: isPending }
}

export const useUser = () => {
    const { data, isFetching } = useQuery({
        queryKey: ["getUser"],
        queryFn: getUser
    })

    return { user: data, isGettingUser: isFetching }
}

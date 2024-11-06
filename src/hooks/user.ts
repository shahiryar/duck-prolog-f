"use client"

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

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

    const { mutateAsync, isPending } = useMutation({
        mutationFn: login,
        onSuccess,
    })

    return { login: mutateAsync, isLoggingIn: isPending }
}

export const useSignup = () => {
    const client = useQueryClient()

    const onSuccess = (token: string) => {
        setToken(token)
        client.invalidateQueries({
            predicate: ({ queryKey }) => queryKey[0] === "getUser"
        })
    }

    const { mutateAsync, isPending } = useMutation({
        mutationFn: signup,
        onSuccess
    })

    return { signup: mutateAsync, isSigningUp: isPending }
}

export const useUser = () => {
    const { data, isFetching } = useQuery({
        queryKey: ["getUser"],
        queryFn: getUser
    })

    return { user: data, isGettingUser: isFetching }
}

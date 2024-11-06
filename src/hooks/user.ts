"use client"

import { useMutation, useQuery } from "@tanstack/react-query"

import { getUser, login, signup } from "@/services/user"

export const useLogin = () => {
    const { mutateAsync, isPending } = useMutation({
        mutationFn: login
    })

    return { login: mutateAsync, isLoggingIn: isPending }
}

export const useSignup = () => {
    const { mutateAsync, isPending } = useMutation({
        mutationFn: signup
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

"use client"

import { useMutation } from "@tanstack/react-query"

import { login } from "@/services/user"

export const useLogin = () => {
    const { mutateAsync, isPending } = useMutation({
        mutationFn: login
    })

    return { login: mutateAsync, isLoggingIn: isPending }
}

export const useSignup = () => {}

export const useUser = () => {}

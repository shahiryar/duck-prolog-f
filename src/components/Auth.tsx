"use client"

import { IAuthProps } from "@/types/components"

import { useUser } from "@/hooks/user"

import duckLogo from "../../public/icon128.png"

import { usePathname, useRouter } from "next/navigation"
import Image from "next/image"
import React from "react"

const Auth: React.FC<IAuthProps> = ({
    children
}) => {
    const { user, isGettingUser } = useUser()
    const router = useRouter()
    const pathname = usePathname()
    const restrictedPathsWhenLoggedOut = ["dashboard"]
    const restrictedPathsWhenLoggedIn = ["login", "signup"]

    if(isGettingUser) return <div className="w-full h-screen flex flex-col justify-center items-center">
        <div className="animate-heartbeat">
            <Image src={duckLogo} alt="logo" />
        </div>
    </div>

    if(!user?._id && restrictedPathsWhenLoggedOut.some(path => pathname.includes(path))) {
        router.push("/login")
        return <></>
    }

    if(user?._id && restrictedPathsWhenLoggedIn.some(path => pathname.includes(path))) {
        router.push("/dashboard")
        return <></>
    }

    return <>{children}</>
}

export default Auth

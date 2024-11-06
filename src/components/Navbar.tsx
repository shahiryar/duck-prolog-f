"use client"

import Image from "next/image"
import duckLogo from "../../public/icon128.png"
import { useRouter } from "next/navigation"

const Navbar = () => {
    const router = useRouter()
    return (
        <div className="w-full h-[80px] p-2 border-b-[1px] border-b-gray-300 flex justify-between items-center">
            <Image src={duckLogo} width={50} alt="Duckprolog" />
            <div className="flex flex-row gap-4 items-center justify-center">
                <button
                    onClick={() => router.push("/login")}
                    className="p-2 px-4 rounded-md bg-blue-700 text-white"
                >
                    Login
                </button>
                <button
                    onClick={() => router.push("/signup")}
                    className="p-2 px-4 rounded-md bg-blue-700 text-white"
                >
                    Signup
                </button>
            </div>
        </div>
    )
}

export default Navbar

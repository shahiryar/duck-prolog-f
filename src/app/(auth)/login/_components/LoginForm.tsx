"use client"

import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import Button from "@/components/Button"
import { useLogin } from "@/hooks/user"
import Input from "@/components/Input"
import classNames from "classnames"
import Image from "next/image"

import duckLogo from "../../../../../public/icon128.png"

const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const router = useRouter()
    const { login, isLoggingIn } = useLogin()

    const onSubmit = async (data: any) => {
        try {
            const res = await login(data)
            console.log(res)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <form
            className="animate-fade-in flex flex-col justify-center items-center gap-4 w-full px-4"
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className="flex flex-col justify-center items-center gap-2">
                <Image src={duckLogo} alt="duckprolog" />
                <div className="font-[200] text-[22px]">
                    Duckprolog
                </div>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center w-full max-w-[450px] overflow-hidden">
                <Input
                    {...register("email", {
                        required: true,
                        pattern: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
                    })}
                    placeholder="Email"
                    error={!!errors["email"] ? "Please enter a valid email" : ""}
                />
                <Input
                    {...register("password", { required: true, minLength: 5 })}
                    placeholder="Password"
                    type="password"
                    error={!!errors["password"] ? "Please enter a valid password" : ""}
                />
            </div>
            <div className="flex flex-col gap-2 justify-center items-center w-full max-w-[450px]">
                <Button
                    type="submit"
                    className={classNames(
                        "bg-black text-white",
                        { "!bg-red-500": !!errors["email"] || !!errors["password"] }
                    )}
                    isLoading={isLoggingIn}
                >
                    Login
                </Button>
                <Button
                    type="button"
                    onClick={() => router.push("/signup")}
                    className="text-black"
                >
                    Signup
                </Button>
            </div>
        </form>
    )
}

export default LoginForm

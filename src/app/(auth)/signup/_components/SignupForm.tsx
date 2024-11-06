"use client"

import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import Button from "@/components/Button"
import classNames from "classnames"
import Image from "next/image"

import duckLogo from "../../../../../public/icon128.png"
import Input from "@/components/Input"
import { useSignup } from "@/hooks/user"

const SignupForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const router = useRouter()
    const { signup } = useSignup()

    const onSubmit = async(data: any) => {
        try {
            signup(data)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <form
            className="flex flex-col justify-center items-center gap-4 w-full px-4"
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className="flex flex-col justify-center items-center gap-2">
                <Image src={duckLogo} alt="duckprolog" />
                <div className="font-[200] text-[22px]">
                    Duckprolog
                </div>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center w-full max-w-[450px] overflow-hidden">
                <div className="w-full flex flex-row gap-2 justify-center items-center">
                    <Input 
                        {...register("firstName", { required: true, minLength: 3 })}
                        placeholder="First Name"
                        error={!!errors["firstName"] ? "Please enter a valid first name" : ""}
                    />
                    <Input
                        {...register("lastName", { required: true, minLength: 3 })}
                        placeholder="Last Name"
                        error={!!errors["lastName"] ? "Please enter a valid last name" : ""}
                    />
                </div>
                <Input
                    {...register("email", { required: true, pattern: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/ })}
                    placeholder="Email"
                    error={!!errors["email"] ? "Please enter a valid email" : ""}
                />
                <Input
                    {...register("password", { required: true, minLength: 5 })}
                    placeholder="password"
                    type="password"
                    error={!!errors["password"] ? "Please enter a valid password" : ""}
                />
                <Input
                    {...register("confirmPassword", { required: true, minLength: 5 })}
                    placeholder="confirm password"
                    type="password"
                    error={!!errors["confirmPassword"] ? "Passwords must match" : ""}
                />              
            </div>
            <div className="flex flex-col gap-2 justify-center items-center w-full max-w-[450px]">
                <Button 
                    type="submit" 
                    className={classNames(
                        "bg-black text-white",
                        { "!bg-red-500": !!errors["email"] || !!errors["password"] }
                    )}
                >
                    Create Account
                </Button>
                <Button
                    onClick={() => router.push("/login")} 
                    className="text-black"
                    type="button"
                >
                    Already have an account? <span className="font-bold relative">login</span>
                </Button>
            </div>
        </form>
    )
}

export default SignupForm

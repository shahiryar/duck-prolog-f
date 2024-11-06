"use client"

import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import Button from "@/components/Button"
import classNames from "classnames"
import Image from "next/image"

import duckLogo from "../../../../../public/icon128.png"

const SignupForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const router = useRouter()

    const onSubmit = async(data: any) => {
        console.log(data)
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
                    <div className="flex flex-col w-full">
                        <input
                            {...register("firstName", { required: true, minLength: 3 })}
                            className={classNames(
                                "p-2 rounded-lg font-[200] text-[16px] h-[40px] border-[1px] border-gray-300 w-full focus:outline-none",
                                { "!border-red-400 !text-red-500": !!errors["firstName"] }
                            )}
                            placeholder="First Name"
                        />
                        {!!errors["firstName"] ? <div className="text-red-500 font-[200] text-[14px] mt-[2px]">Please enter a valid first name</div> : <></>}
                    </div>
                    <div className="flex flex-col w-full">
                        <input
                            {...register("lastName", { required: true, minLength: 3 })}
                            className={classNames(
                                "p-2 rounded-lg font-[200] text-[16px] h-[40px] border-[1px] border-gray-300 w-full focus:outline-none",
                                { "!border-red-400 !text-red-500": !!errors["lastName"] }
                            )}
                            placeholder="Last Name"
                        />
                        {!!errors["lastName"] ? <div className="text-red-500 font-[200] text-[14px] mt-[2px]">Please enter a valid last name</div> : <></>}                        
                    </div>
                </div>
                <div className="flex flex-col w-full">
                    <input
                        {...register("email", { required: true, pattern: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/ })}
                        className={classNames(
                            "p-2 rounded-lg font-[200] text-[16px] h-[40px] border-[1px] border-gray-300 w-full focus:outline-none",
                            { "!border-red-400 !text-red-500": !!errors["email"] }
                        )}
                        placeholder="Email"
                    />
                    {!!errors["email"] ? <div className="text-red-500 font-[200] text-[14px] mt-[2px]">Please enter a valid email</div> : <></>}
                </div>
                <div className="flex flex-col w-full">
                    <input
                        {...register("password", { required: true, minLength: 5 })}
                        className={classNames(
                            "p-2 rounded-lg font-[200] text-[16px] h-[40px] border-[1px] border-gray-300 w-full focus:outline-none",
                            { "!border-red-400 !text-red-500": !!errors["password"] }
                        )}
                        placeholder="password"
                        type="password"
                    />
                    {!!errors["password"] ? <div className="text-red-500 font-[200] text-[14px] mt-[2px]">Please enter a valid password</div> : <></>}              
                </div>
                <div className="flex flex-col w-full">
                    <input
                        {...register("confirmPassword", { required: true, minLength: 5 })}
                        className={classNames(
                            "p-2 rounded-lg font-[200] text-[16px] h-[40px] border-[1px] border-gray-300 w-full focus:outline-none",
                            { "!border-red-400 !text-red-500": !!errors["confirmPassword"] }
                        )}
                        placeholder="confirm password"
                        type="password"
                    />
                    {!!errors["confirmPassword"] ? <div className="text-red-500 font-[200] text-[14px] mt-[2px]">Passwords must match</div> : <></>} 
                </div>
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

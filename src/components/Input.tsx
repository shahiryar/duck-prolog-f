"use client"

import { IInputProps } from "@/types/components"

import classNames from "classnames"

import React from "react"

const Input: React.FC<IInputProps> = ({
    error,
    ...inputProps
}) => {
    return (
        <div className="flex flex-col w-full">
            <input
                {...inputProps}
                className={classNames(
                    "p-2 rounded-lg font-[200] text-[16px] h-[40px] border-[1px] border-gray-300 w-full focus:outline-none",
                    inputProps?.className,
                    { "!border-red-400 !text-red-500": !!error }
                )}
            />
            {!!error ? <div className="text-red-500 font-[200] text-[14px] mt-[2px]">{error}</div> : <></>}
        </div>
    )
}

export default Input

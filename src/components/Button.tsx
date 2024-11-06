"use client"

import { IButtonProps } from "@/types/components"

import classNames from "classnames"

import React from "react"

const Button: React.FC<IButtonProps> = ({ className, isLoading, ...props }) => {
    return (
        <button
            className={classNames(
                "w-full p-2 rounded-lg h-[40px]",
                "transition-all duration-1000",
                className
            )}
            {...props}
        />
    )
}

export default Button

import React from "react"

export interface IButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    isLoading?: boolean;
}

export interface IInputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    error?: string;
}

export interface IAuthProps {
    children?: React.ReactNode | React.ReactNode[];
}

export interface ILoaderProps {
    className?: string;
}

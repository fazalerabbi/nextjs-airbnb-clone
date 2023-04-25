'use client';

import { FC } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { BiDollar } from "react-icons/bi";

interface InputProps {
    id: string;
    label: string;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
    type?: string;
    disabled?: boolean;
    formatPrice?: boolean;
    required?: boolean;
}
const Input: FC<InputProps> = ({
    id,
    label,
    type = "text",
    disabled,
    formatPrice,
    register,
    required,
    errors,
}) => {
    return (
        <div
            className="w-full relative">
            {formatPrice && (
                <BiDollar size={18} className="text-neutral-700 absolute top-5 left-2" />
            )}
            <input
                id={id}
                disabled={disabled}
                type={type}
                {...register(id, { required })}
                placeholder=" "
                className={`
                    peer
                    w-full
                    p-4
                    pt-5
                    font-light
                    bg-white
                    border-2
                    rounded-md
                    outline-none
                    transition
                    disabled:opacity-70
                    disabled:cursor-not-allowed
                    ${formatPrice ? 'pl-9' : 'pl-4'}
                    ${errors[id] ? 'border-red-500 focus:border-rose-500' : 'focus:border-black border-neutral-300'}
                `}
            />
            <label
                className={`
                    absolute
                    text-md
                    duration-150
                    transform
                    -translate-y-5
                    top-5
                    z-10
                    origin-[0]
                    ${formatPrice ? 'left-9' : 'left-4'}
                    peer-placeholder-shown:scale-100
                    peer-placeholder-shown:translate-y-0
                    peer-focus:scale-60
                    peer-focus:-translate-y-4
                    ${errors[id] ? 'text-red-500' : 'text-zinc-400'}
                `}
            >
                {label}
            </label>
        </div>
    );
}

export default Input;
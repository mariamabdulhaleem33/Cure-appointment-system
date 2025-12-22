import type { UseFormRegisterReturn } from "react-hook-form";

type InputProps = {
    type:string;
    placeholder:string;
    id:string;
    register:UseFormRegisterReturn<string>
}

const InputAuth = ({ type, placeholder, id, register }: InputProps) => {
    return (
        <>
            <label htmlFor={id} className="text-secondry capitalize">{placeholder}</label>
            <input className="w-full border py-2 px-4 rounded-[10px]" {...register} type={type} placeholder={placeholder} id={id} />
        </>
    )
}

export default InputAuth

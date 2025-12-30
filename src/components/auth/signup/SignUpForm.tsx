import AuthFormHeading from "@/components/ui/AuthFormHeading"
import GoogleButton from "@/components/ui/GoogleButton"
import InputAuth from "@/components/ui/InputAuth"
import OrDivider from "@/components/ui/OrDivider"
import { Link } from "react-router-dom"
import { useForm, } from 'react-hook-form';
import { signUpSchema, type typeForm } from "@/schemas/signup.schema"
import { zodResolver } from '@hookform/resolvers/zod';
import InputError from "@/components/ui/InputError"
import { signUpFn } from "@/services/auth.service"
import { useNavigate } from "react-router-dom"
import { useMutation } from "@tanstack/react-query"
import type { AxiosError } from "axios"
import type { SignUpErrorResponse, TserverErrors } from "../types/SignUpTypes"


const SignUpForm = () => {
    console.log(import.meta.env.VITE_BASE_URL)
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors },setError } = useForm<typeForm>({
        mode: 'onChange',
        resolver: zodResolver(signUpSchema)
    });
    const inputsData = [
        {
            type: "text",
            placeholder: "Full Name",
            id: "name",
            register: register("name", { required: true }),
            error: errors.name
        },
        {
            type: "email",
            placeholder: "Email",
            id: "email",
            register: register("email", { required: true }),
            error: errors.email
        },
        {
            type: "text",
            placeholder: "Phone number",
            id: "phone",
            register: register("mobile_number", { required: true }),
            error: errors.mobile_number
        },
        {
            type: "password",
            placeholder: "password",
            id: "password",
            register: register("password", { required: true }),
            error: errors.password
        },
        {
            type: "password",
            placeholder: "Confirm Password",
            id: "password_confirmation",
            register: register("password_confirmation", { required: true }),
            error: errors.password_confirmation
        },
    ]
    const { mutate } = useMutation({
        mutationFn: signUpFn,
        onSuccess: (data) => {

            console.log('done', data)
            if(data) {
                console.log('helo',data)
                navigate('/otp', { state: { mobile_number: data.user.mobile_number } })
            }
        },
        onError: (error: AxiosError<SignUpErrorResponse>) => {
            const serverErrors = error?.response?.data?.errors as TserverErrors;
            if (serverErrors) {
                Object.keys(serverErrors).forEach((key) => {
                    setError(key as keyof typeForm, {
                        message: serverErrors[key][0],
                    });
                });
            }
        }
    });
    const onSubmit = (data: typeForm) => {
        mutate(data)
        console.log(data)

    }
    return (
        <div className="w-[90%] sm:w-[90%]  mx-auto lg:w-105 flex flex-col justify-center  overflow-x-hidden my-20 p-2 ">
            <div className="w-full lg:w-92.75 mx-auto">
                <AuthFormHeading title="sign up" />
                <p className="text-[#6d7379] text-[12px] w-full lg:w-92.75">Please provide all information required to create your account</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full lg:w-94.5 mx-auto mt-5 flex flex-col gap-3 ">
                {
                    inputsData.map((input, index) => {
                        return (
                            <div key={index}>
                                <InputAuth type={input.type} placeholder={input.placeholder} id={input.id} register={input.register} />
                                <InputError error={input.error} />
                            </div>
                        )
                    })
                }
                <button type="submit" className="bg-primary text-white rounded-[10px] py-2 cursor-pointer">Sign in</button>
                <OrDivider />
                <GoogleButton />
                <p className="text-center text-[12px]">Already have an account! <Link to={'/login'} className="text-primary">Sign in</Link></p>
            </form>
        </div>
    )
}

export default SignUpForm

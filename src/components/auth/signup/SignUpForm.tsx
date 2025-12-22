import AuthFormHeading from "@/components/ui/AuthFormHeading"
import GoogleButton from "@/components/ui/GoogleButton"
import InputAuth from "@/components/ui/InputAuth"
import OrDivider from "@/components/ui/OrDivider"
import { Link } from "react-router-dom"
import { useForm, } from 'react-hook-form';
import { signUpSchema, type typeForm } from "@/schemas/signup.schema"
import { zodResolver } from '@hookform/resolvers/zod';
import InputError from "@/components/ui/InputError"


const SignUpForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<typeForm>({
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
            register: register("phone", { required: true }),
            error: errors.phone
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
            id: "confirmed",
            register: register("confirmed", { required: true }),
            error: errors.confirmed
        },
    ]

    const onSubmit = (data: typeForm) => {
        console.log(data)
    }
    return (
        <div className="w-105 relative top-1.25 left-46.5">
            <div  className="w-92.75 mx-auto">
                <AuthFormHeading title="sign up" />
                <p className="text-[#6D7379] text-[13px] w-92.75">Please provide all information required to create your account</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="w-94.5 mx-auto mt-5 flex flex-col gap-3 ">
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

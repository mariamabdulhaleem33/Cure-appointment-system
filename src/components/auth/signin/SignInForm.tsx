import AuthFormHeading from '@/components/ui/AuthFormHeading'
import GoogleButton from '@/components/ui/GoogleButton'
import OrDivider from '@/components/ui/OrDivider'
import { Link } from "react-router-dom"
import { useForm, } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signInSchema, type SignInFormType } from '@/schemas/signin.schema';
import InputAuth from '@/components/ui/InputAuth'
import InputError from '@/components/ui/InputError'

export default function SignInForm() {
const { register, handleSubmit, formState: { errors } } = useForm<SignInFormType>({
        mode: 'onChange',
        resolver: zodResolver(signInSchema)
    });
const inputsData = [
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
        
    ]
const onSubmit = (data: SignInFormType) => {
        console.log(data)
    }


  return (
    <div className="w-105 relative top-1.25 left-46.5">
            <div  className="w-92.75 mx-auto">
                <AuthFormHeading title="sign in" />
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
                <p className="text-center text-[12px]">Don’t have an account?<Link to={'/signup'} className="text-primary">Sign up</Link></p>
            </form>
        </div>
  )
}

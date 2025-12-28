import AuthFormHeading from '@/components/ui/AuthFormHeading'
import GoogleButton from '@/components/ui/GoogleButton'
import OrDivider from '@/components/ui/OrDivider'
import { Link } from "react-router-dom"
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signInSchema, type SignInFormType } from '@/schemas/signin.schema';
import InputAuth from '@/components/ui/InputAuth'
import InputError from '@/components/ui/InputError'
import { useLogin } from '@/hooks/useAuth';
import type { AxiosError } from 'axios';

interface ErrorResponse {
  message: string;
}

export default function SignInForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<SignInFormType>({
    mode: 'onChange',
    resolver: zodResolver(signInSchema)
  });

  const { mutate: login, isPending, error, isError } = useLogin();

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
    login({
      phone: data.phone,
      password: data.password
    });
  }

  // Get error message safely
  const errorMessage = isError 
    ? (error as AxiosError<ErrorResponse>)?.response?.data?.message || 'Login failed. Please try again.'
    : '';

  return (
    <div className="w-[90%] sm:w-[90%]  mx-auto lg:w-105 flex flex-col justify-center  overflow-x-hidden my-20 p-2 ">
      <div className="w-full lg:w-92.75 mx-auto">
        <AuthFormHeading title="sign in" />
        <p className="text-[#6D7379] text-[13px] w-92.75">
          Please provide all information required to create your account
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full lg:w-94.5 mx-auto mt-5 flex flex-col gap-3 ">
        {isError && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-[10px] text-sm">
            {errorMessage}
          </div>
        )}

        {inputsData.map((input, index) => (
          <div key={index}>
            <InputAuth 
              type={input.type} 
              placeholder={input.placeholder} 
              id={input.id} 
              register={input.register} 
            />
            <InputError error={input.error} />
          </div>
        ))}

        <button 
          type="submit" 
          disabled={isPending}
          className="bg-primary text-white rounded-[10px] py-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
        >
          {isPending ? 'Signing in...' : 'Sign in'}
        </button>

        <OrDivider />
        <GoogleButton />
        <p className="text-center text-[12px]">
          Don't have an account? <Link to={'/signup'} className="text-primary ml-1">Sign up</Link>
        </p>
      </form>
    </div>
  )
}
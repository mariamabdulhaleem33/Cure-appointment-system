import SignUpBg from "@/components/auth/signup/SignUpBg"
import SignInForm from "@/components/auth/signin/SignInForm"
import Logo from "@/components/layout/navbar/Logo"

export default function SignIn() {
  return (
   <div className=" flex flex-col lg:flex-row min-h-screen  items-center justify-center lg:justify-around">
      <div className="relative lg:fixed top-9.5 left-6 lg:left-25 bg-white self-start">
        <Logo />
      </div>
      <div><SignInForm/></div>
      <div>
        <SignUpBg />
      </div>
    </div>
  )
}

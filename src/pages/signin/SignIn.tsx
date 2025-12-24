import SignUpBg from "@/components/auth/signup/SignUpBg"
import SignInForm from "@/components/auth/signin/SignInForm"
import Logo from "@/components/layout/navbar/Logo"

export default function SignIn() {
  return (
   <div className=" flex ">
      <div className="fixed top-2.5 left-15">
        <Logo />
      </div>
      <SignInForm />
      <SignUpBg/>
    </div>
  )
}

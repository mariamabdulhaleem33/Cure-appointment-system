import SignUpBg from "@/components/auth/signup/SignUpBg"
import SignUpForm from "@/components/auth/signup/SignUpForm"
import Logo from "@/components/layout/navbar/Logo"


const SignUp = () => {
  return (
    <div className=" flex ">
      <div className="fixed top-2.5 left-15">
        <Logo />
      </div>
      <SignUpForm />
      <SignUpBg />

    </div>
  )
}

export default SignUp

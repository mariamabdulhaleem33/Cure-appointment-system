import SignUpBg from "@/components/auth/signup/SignUpBg"
import SignUpForm from "@/components/auth/signup/SignUpForm"
import Logo from "@/components/layout/navbar/Logo"


const SignUp = () => {
  return (
    <div className=" flex flex-col lg:flex-row min-h-screen  items-center justify-center lg:justify-around">
      <div className="relative lg:fixed top-9.5 left-6 lg:left-25 self-start">
        <Logo />
      </div>
      <div><SignUpForm /></div>
      <div>
        <SignUpBg />
      </div>
    </div>
  )
}

export default SignUp

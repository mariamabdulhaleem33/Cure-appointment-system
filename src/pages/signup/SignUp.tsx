import SignUpBg from "@/components/auth/signup/SignUpBg"
import SignUpForm from "@/components/auth/signup/SignUpForm"
import Logo from "@/components/layout/navbar/Logo"


const SignUp = () => {
  return (
    <div className=" flex min-h-screen  items-center justify-center lg:justify-around">
      <div className="fixed top-9.5 left-25 bg-white ">
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

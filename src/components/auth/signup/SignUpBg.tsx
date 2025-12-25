import { bgSignUp1 } from "../../../assets/index"
import { bgSignUp2 } from "../../../assets/index"


const SignUpBg = () => {
  return (
    <div   className={`hidden  fixed right-0 bottom-0 lg:flex  w-212 z-[-1] `}>
      <img src={bgSignUp2} alt="" className="w-full  h-screen  object-cover " />
      <img src={bgSignUp1} alt="" className="w-full   h-screen!  object-cover absolute  right-0 top-0 bottom-0 z-100" />
    </div> 
  )
}

export default SignUpBg

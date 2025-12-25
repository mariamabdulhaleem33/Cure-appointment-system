import AuthFormHeading from "@/components/ui/AuthFormHeading"
import OtpForm from "./OtpForm"


const CodeVerifaction = () => {
  return (
    <div className=" w-105 relative flex justify-center  lg:left-0 mx-auto overflow-hidden text-center">
      <div className="w-76.5">
        <AuthFormHeading title="Code Verification"  />
        <p className="text-[14px] text-[#404448] mt-3">Code has been send to your phone number</p>
        <p className="text-[12px] text-[#1490E3] ">Check your phone number</p>
         <OtpForm />
      </div>
     
    </div>
  )
}

export default CodeVerifaction
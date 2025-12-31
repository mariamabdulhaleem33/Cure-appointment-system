import { googleLogo } from "@/assets"

const GoogleButton = () => {
  return (
    <button type="button" className="flex items-center justify-center py-2 cursor-pointer gap-2 border-inputs">
      <img src={googleLogo} alt="google logo" />
      <p className="font-500 text-secondry">Sign up with Google</p>
    </button>
  )
}

export default GoogleButton

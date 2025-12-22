import CodeVerifaction from "@/components/auth/codeVerifaction/CodeVerifaction"
import SignUpBg from "@/components/auth/signup/SignUpBg"
import Logo from "@/components/layout/navbar/Logo"

const Otp = () => {
    return (
        <div>
            <SignUpBg />
            <CodeVerifaction />
            <div className="fixed top-12.5 left-25">
                <Logo />
            </div>
        </div>
    )
}

export default Otp

import CodeVerifaction from "@/components/auth/codeVerifaction/CodeVerifaction";
import SignUpBg from "@/components/auth/signup/SignUpBg";
import Logo from "@/components/layout/navbar/Logo";

const Otp = () => {
    return (
        <div className=" flex min-h-screen max-w-full  items-center justify-center lg:justify-around">
            <div className="fixed top-9 left-12.5 bg-white ">
                <Logo />

            </div>
            <div>
                <CodeVerifaction />
            </div>
            <div>
                <SignUpBg />
            </div>
        </div>
    )
}

export default Otp;

import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"
import InputError from "@/components/ui/InputError";
import { otpSchema, type otpType } from "@/schemas/otp.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller, type SubmitHandler } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useOtp } from "../hooks/useOtp";

const OtpForm = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [timer, setTimer] = useState(0)
    useEffect(() => {
        if (timer <= 0) return;

        const interval = setInterval(() => {
            setTimer((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [timer]);
    const mobile_number = location.state?.mobile_number;
    const { control, handleSubmit, register, formState: { errors }, setError
    } = useForm<otpType>({
        mode: 'onChange',
        resolver: zodResolver(otpSchema),
        defaultValues: {
            otp: "",
            mobile_number: mobile_number
        }
    });
    const { verifyOtp, resendOtp } = useOtp(
        (data) => { // onSuccessVerify
            console.log(data.token)
            localStorage.setItem("authToken", data.token);
            navigate("/", { replace: true });
        },
        (error) => { // onErrorVerify
            const serverErrors = error.response?.data?.errors;
            if (serverErrors) {
                Object.keys(serverErrors).forEach((key) =>
                    setError(key as keyof otpType, { message: serverErrors[key][0] })
                );
                return;
            }
            if (error.response?.data?.message) {
                setError("otp", { message: error.response.data.message });
            }
        },
        (time) => setTimer(time) 
    );
    const onSubmit: SubmitHandler<otpType> = (data) => {
        verifyOtp.mutate(data)
        console.log(data)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-76.25 mx-auto flex flex-col gap-8">
            <div className="space-y-2">
                <Controller
                    name="otp"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                        <InputOTP
                            maxLength={4}
                            value={field.value}
                            onChange={field.onChange}
                        >
                            <InputOTPGroup>
                                {[0, 1, 2, 3].map((i) => (
                                    <InputOTPSlot key={i} index={i} />
                                ))}
                            </InputOTPGroup>
                        </InputOTP>
                    )}
                />
                <InputError error={errors.otp} />
                <input type="hidden" defaultValue={mobile_number} {...register("mobile_number")} />
                <InputError error={errors.mobile_number} />
            </div>
            <button type="button" disabled={timer > 0 || verifyOtp.isPending} onClick={() => resendOtp.mutate({ mobile_number })} className="text-[14px] ">
                {timer > 0 ? <> Resend code in <span className="text-primary">{timer.toFixed()}</span> s</> : <span>Resend code</span>}
            </button>
            <button type="submit" className="bg-primary text-white rounded-[10px] py-2 cursor-pointer w-full "> verify</button>
        </form>
    )
}

export default OtpForm

import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"
import InputError from "@/components/ui/InputError";
import { otpSchema, type otpType } from "@/schemas/otp.schema";
import { otpFn, resendOtpFn } from "@/services/auth.service";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import type { AxiosError, } from "axios";
import { useForm, Controller, type SubmitHandler } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import type { TErrorErrorResponse, TServerErrorsResendOtp,  } from "../types/SignUpTypes";
import { useEffect, useState } from "react";

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
    console.log(location)
    const mobile_number = location.state?.mobile_number;
    const { control, handleSubmit, register, formState: { errors }, setError
    } = useForm<otpType>({
        mode: 'onChange',
        resolver: zodResolver(otpSchema),
        defaultValues: {
            otp: "",
            mobile_number: mobile_number || ""
        }
    });
    const { mutate, } = useMutation({
        mutationFn: otpFn,
        onSuccess: (data) => {
            console.log('done', data)
            const responseData = data;
           const tokenUser =data?.token;
            if(responseData) {
                console.log(tokenUser)
                localStorage.setItem("authToken",tokenUser);
                  navigate('/', { replace: true })
            }
           
        },
        onError: (error: AxiosError<TErrorErrorResponse | { success: boolean, message?: string }>) => {
            const responseData = error?.response?.data;
            const serverErrors = (responseData as TErrorErrorResponse)?.errors;
            if (serverErrors) {
                Object.keys(serverErrors).forEach((key) => {
                    setError(key as keyof otpType, {
                        message: serverErrors[key][0],
                    });
                });
                return;
            }
            if (responseData?.message) {
                setError("otp", {
                    message: responseData.message,
                });
            }
        }
    });
    const { mutate: resendOtp, isPending, } = useMutation({
        mutationFn: resendOtpFn,
        onSuccess: (data) => {
            console.log(data)
        },
        onError: (error: AxiosError<TServerErrorsResendOtp>) => {
            const data = error.response?.data;

            if (data) {
                setTimer(data.time_remaining);
            }
        }
    });


    const onSubmit: SubmitHandler<otpType> = (data) => {
        mutate(data)
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
                                <InputOTPSlot index={0} />
                                <InputOTPSlot index={1} />
                                <InputOTPSlot index={2} />
                                <InputOTPSlot index={3} />
                            </InputOTPGroup>
                        </InputOTP>
                    )}
                />
                <InputError error={errors.otp} />
                <input type="hidden" defaultValue={mobile_number} {...register("mobile_number")} />
                <InputError error={errors.mobile_number} />
            </div>
            <button type="button" disabled={timer > 0 || isPending} onClick={() => resendOtp({ mobile_number })} className="text-[14px] ">
                {timer > 0 ? <> Resend code in <span className="text-primary">{timer.toFixed()}</span> s</> : <span>Resend code</span>}
            </button>
            <button type="submit" className="bg-primary text-white rounded-[10px] py-2 cursor-pointer w-full "> verify</button>
        </form>
    )
}

export default OtpForm

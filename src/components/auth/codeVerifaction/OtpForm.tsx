import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"
import { otpSchema, type otpType } from "@/schemas/otp.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller, type SubmitHandler } from "react-hook-form";

const OtpForm = () => {
    const { control, handleSubmit , register } = useForm<otpType>({
        mode: 'onChange',
        resolver: zodResolver(otpSchema),
        defaultValues: {
            otp: "",
            phone: "1234",
        },
    });
    const onSubmit: SubmitHandler<otpType> = (data) => {
        console.log(data)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-76.25 mx-auto ">
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
                <input type="hidden" {...register("phone")} />
            </div>
            <p className="text-[14px] mt-3">Resend code in <span className="text-primary">55</span> s</p>
            <button type="submit" className="bg-primary text-white rounded-[10px] py-2 cursor-pointer w-full mt-4"> verify</button>

        </form>
    )
}

export default OtpForm

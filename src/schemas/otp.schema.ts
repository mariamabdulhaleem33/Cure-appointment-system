import z from "zod";

export const otpSchema = z.object({
    phone:z.string().regex(/^(\+20|0)?1[0-2,5][0-9]{8}$/),
    otp:z.string().min(4,"please enter code verification").max(4)
})

export type otpType = z.infer<typeof otpSchema>;
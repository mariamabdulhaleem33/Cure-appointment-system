import api from "@/api/axios"
import type { Totp, TResendOtpPayload } from "@/components/auth/types/SignUpTypes";
import type { typeForm } from "@/schemas/signup.schema"

export const signUpFn = async (data: typeForm) => {
    const response = await api.post('/auth/register', {
        name: data.name,
        email: data.email,
        phone: data.phone,
        password: data.password,
        password_confirmation:data.password_confirmation
    });
    console.log(response)
    return response.data;
}

export const otpFn = async (data : Totp ) => {
    const response = await api.post('/auth/verify-otp', {
        phone:data.phone,
        otp:data.otp
    });
    console.log(response)
    return response.data;
}

export const resendOtpFn = async (data: TResendOtpPayload ) => {
  const response = await api.post('/auth/resend-otp', data);
  return response.data;
};

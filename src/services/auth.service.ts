import api from "@/api/axios"
import type { Totp, TResendOtpPayload } from "@/components/auth/types/SignUpTypes";
import type { typeForm } from "@/schemas/signup.schema"

export const signUpFn = async (data: typeForm) => {
    const response = await api.post('register', {
        name: data.name,
        email: data.email,
        mobile_number: data.mobile_number,
        password: data.password,
        password_confirmation:data.password_confirmation
    });
    console.log(response.data)
    return response.data;
}

export const otpFn = async (data : Totp ) => {
    const response = await api.post('otpVerifyForRegister', {
        mobile_number:data.mobile_number,
        otp:data.otp
    });
    console.log(response)
    return response.data;
}

export const resendOtpFn = async (data: TResendOtpPayload ) => {
  const response = await api.post('resendOtp', data);
  console.log(response)
  return response.data;
};

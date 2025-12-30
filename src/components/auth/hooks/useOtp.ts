import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { otpFn, resendOtpFn } from "@/services/auth.service";
import type { TSignupResponse, TErrorResponse, TServerErrorsResendOtp, Totp } from "../types/SignUpTypes";

export const useOtp = (
  onSuccessVerify: (data: TSignupResponse) => void,
  onErrorVerify: (error: AxiosError<TErrorResponse>) => void,
  onResendError: (time: number) => void
) => {
  const verifyOtp = useMutation<TSignupResponse, AxiosError<TErrorResponse>, Totp>({
    mutationFn: otpFn,
    onSuccess: onSuccessVerify,
    onError: onErrorVerify,
  });

  const resendOtp = useMutation<TServerErrorsResendOtp, AxiosError<TServerErrorsResendOtp>, { mobile_number: string }>({
    mutationFn: resendOtpFn,
    onError: (error) => {
      const data = error.response?.data;
      if (data) onResendError(data.time_remaining);
    },
  });

  return { verifyOtp, resendOtp };
};

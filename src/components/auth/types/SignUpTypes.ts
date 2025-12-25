export type Totp = {
    phone: string;
    otp: string;
}
export type TserverErrors = {
    [key: string]: string[];
};

export type SignUpErrorResponse = {
    message: string;
    errors: TserverErrors;
};

export type TErrorErrorResponse = {
    message: string;
    errors: TserverErrors;
};

export type TResendOtpPayload = {
  phone: string;
};

export type TServerErrorsResend = {
  success:boolean;
  message:string;
  retry_after_seconds?:number
};


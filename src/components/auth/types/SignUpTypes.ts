
export type Totp = {
  mobile_number: string;
  otp: string;
}
export type TserverErrors = {
  [key: string]: string[];
};

export type SignUpErrorResponse = {
  message: string;
  errors: TserverErrors;
};

export type Tuser = {
  name: string;
  email: string;
  password:string,
  mobile_number:string
}
export type TSignupResponse = {
  message:string;
  user: {
    id:number;
    name:string;
    email:string;
    mobile_number:string;
  }
  token:string;
}

export type TErrorErrorResponse = {
  message: string;
  errors: TserverErrors;
};

export type TResendOtpPayload = {
  mobile_number: string;
};

export type TServerErrorsResendOtp = {
  message: string;
  time_remaining: number
};


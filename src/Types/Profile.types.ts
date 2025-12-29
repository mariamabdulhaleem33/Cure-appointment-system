import type { ReactNode } from "react";

export interface NavlinkProps {
  to: string;
  children: ReactNode;
  text: string;
}

export type ProfileImgProps={
  src?: string,
  editable: boolean,
  style?: string
}

export interface ChangePasswordResponse {
  message: string;
} 

export interface ProfileResponse {
  id: number;
  name: string;
  email: string;
  mobile_number: string;
  location?: string;
  birth_date?: string;
  profile_photo?: string;
  profile_photo_url?:string;
}


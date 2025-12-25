import type { ReactNode } from "react";

export interface NavlinkProps {
  to: string;
  children: ReactNode;
  text: string;
}

export interface ProfileImgProps{
  src?:string;
  editable:boolean;
  style:string;
}

export type FormDataType = {
  name: string;
  email: string;
  phone: string;
  image: null;
  birthdate: {
    day: string;
    month: string;
    year: string;
  };
  address: string;
};

export type UpdateProfilePayload = {
  name: string;
  email: string;
  phone: string;
  address: string;
  image: File|null;
  birthDay: number;
  birthMonth: number;
  birthYear: number;
};
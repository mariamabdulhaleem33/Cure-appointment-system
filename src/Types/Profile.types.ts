import type { ReactNode } from "react";

export interface NavlinkProps {
  to: string;
  children: ReactNode;
  text: string;
}

export interface ProfileImgProps{
  src?:string;
  editable:boolean;
  onSelect?:(file:File)=>void;
  style:string;
}
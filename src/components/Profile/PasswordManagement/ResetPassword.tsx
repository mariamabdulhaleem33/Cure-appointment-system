import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import type { FC } from "react";
import { useForm } from "react-hook-form";
import {
  resetPasswordSchema,
  type resetPasswordType,
} from "@/schemas/profile/reset-password.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import InputError from "@/components/ui/InputError";

const ResetPassword: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<resetPasswordType>({
    mode: "onChange",
    resolver: zodResolver(resetPasswordSchema),
  });

  const inputFields = [
    {
      fieldStyle: "w-full flex flex-col justify-center items-start gap-2",
      labelText: "Phone Number",
      labelStyle: "font-normal text-slate-900",
      id: "phone",
      inputType: "text",
      inputPlaceholder: "Phone Number",
      register: register("phone"),
      err: errors.phone,
    },
    {
      fieldStyle: "w-full flex flex-col justify-center items-start gap-2",
      labelText: "New Password",
      labelStyle: "font-normal text-slate-900",
      id: "new-password-r",
      inputType: "password",
      inputPlaceholder: "New Password",
      register: register("newPasswordR"),
      err: errors.newPasswordR,
    },

    {
      fieldStyle: "w-full flex flex-col justify-center items-start gap-2",
      labelText: "Confirm New Password",
      labelStyle: "font-normal text-slate-900",
      id: "confirm-new-password-r",
      inputType: "password",
      inputPlaceholder: "Confirm New Password",
      register: register("confirmPasswordR"),
      err: errors.confirmPasswordR,
    },
  ];

  const onSubmit = (data: resetPasswordType) => {
    console.log("Reset Password Data:", data);
  };
  return (
    <form
      className="w-1/2 flex flex-col justify-center items-center  gap-8"
      onSubmit={handleSubmit(onSubmit)}
    >
      <p className=" font-secondary text-3xl text-slate-900">Reset Password</p>

      {inputFields.map((field) => (
        <div className={field.fieldStyle} key={field.id}>
          <Label htmlFor={field.id} className={field.labelStyle}>
            {field.labelText}
          </Label>
          <Input
            type={field.inputType}
            id={field.id}
            placeholder={field.inputPlaceholder}
            {...field.register}
          />
          {field.err && InputError({ error: field.err })}
        </div>
      ))}
      <div className="w-full col-start-2 flex flex-col justify-end items-end">
        <Button className="shadow-sm w-full bg-sky-700 hover:bg-sky-800">
          Reset
        </Button>
      </div>
    </form>
  );
};
export default ResetPassword;

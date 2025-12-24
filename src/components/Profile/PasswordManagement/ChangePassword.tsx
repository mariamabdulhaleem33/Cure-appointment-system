import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import type { FC } from "react";
import { useForm } from "react-hook-form";
import {
  changePasswordSchema,
  type changePasswordType,
} from "@/schemas/profile/change-password.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import InputError from "@/components/ui/InputError";

const ChangePassword: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<changePasswordType>({
    mode: "onChange",
    resolver: zodResolver(changePasswordSchema),
  });

  const inputFields = [
    {
      fieldStyle: "w-full flex flex-col justify-center items-start gap-2",
      labelText: "Current Password",
      labelStyle: "font-normal text-slate-900",
      id: "current-password",
      inputType: "password",
      inputPlaceholder: "Current Password",
      register: register("currentPassword"),
      err: errors.currentPassword,
    },
    {
      fieldStyle: "w-full flex flex-col justify-center items-start gap-2",
      labelText: "New Password",
      labelStyle: "font-normal text-slate-900",
      id: "new-password-ch",
      inputType: "password",
      inputPlaceholder: "New Password",
      register: register("newPasswordCh"),
      err: errors.newPasswordCh,
    },

    {
      fieldStyle: "w-full  flex flex-col justify-center items-start gap-2",
      labelText: "Confirm New Password",
      labelStyle: "font-normal text-slate-900",
      id: "confirm-new-password-ch",
      inputType: "password",
      inputPlaceholder: "Confirm New Password",
      register: register("confirmPasswordCh"),
      err: errors.confirmPasswordCh,
    },
  ];

  const onSubmit = (data: changePasswordType) => {
    console.log("Change Password Data:", data);
  };
  return (
    <form
      className="w-full flex flex-col justify-start items-start  gap-8"
      onSubmit={handleSubmit(onSubmit)}
    >
      <p className="font-secondary text-3xl text-slate-900">Change Password</p>
      {inputFields.map((field) => (
        <div className={field.fieldStyle} key={field.id}>
          <Label htmlFor={field.id} className="font-normal text-slate-900">
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
      <div className="w-full  col-start-2 flex flex-col justify-end items-end">
        <Button className="shadow-sm w-full bg-sky-700 hover:bg-sky-800">
          Update
        </Button>
      </div>
    </form>
  );
};
export default ChangePassword;

import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { type FC } from "react";
import { useForm } from "react-hook-form";
import {
  changePasswordSchema,
  type ChangePasswordFormData,
} from "@/schemas/profile/change-password.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import InputError from "@/components/ui/InputError";
import { useChangePassword } from "@/hooks/profile/useChangePassword";

const ChangePassword: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ChangePasswordFormData>({
    mode: "onChange",
    resolver: zodResolver(changePasswordSchema),
  });

  const {mutate} = useChangePassword();

  const inputFields = [
    {
      fieldStyle: "w-full flex flex-col justify-center items-start gap-2",
      labelText: "Current Password",
      labelStyle: "font-normal text-slate-900",
      id: "current-password",
      inputType: "password",
      inputPlaceholder: "Current Password",
      register: register("current_password"),
      err: errors.current_password,
    },
    {
      fieldStyle: "w-full flex flex-col justify-center items-start gap-2",
      labelText: "New Password",
      labelStyle: "font-normal text-slate-900",
      id: "new-password-ch",
      inputType: "password",
      inputPlaceholder: "New Password",
      register: register("new_password"),
      err: errors.new_password,
    },

    {
      fieldStyle: "w-full  flex flex-col justify-center items-start gap-2",
      labelText: "Confirm New Password",
      labelStyle: "font-normal text-slate-900",
      id: "confirm-new-password-ch",
      inputType: "password",
      inputPlaceholder: "Confirm New Password",
      register: register("new_password_confirmation"),
      err: errors.new_password_confirmation,
    },
  ];

  const onSubmit = async (data: ChangePasswordFormData) => {
    mutate(data);
  };
  return (
    <form
      className="w-full flex self-start flex-col justify-start items-start  gap-10"
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
        <Button className="shadow-sm w-1/2 bg-sky-700 hover:bg-sky-800">
          Update
        </Button>
      </div>
    </form>
  );
};
export default ChangePassword;

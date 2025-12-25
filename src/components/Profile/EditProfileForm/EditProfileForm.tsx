import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import BirthdaySelector from "./BirthdaySelector";
import { type FC } from "react";
import { useForm } from "react-hook-form";
import {
  editProfileSchema,
  type typeEditForm,
} from "@/schemas/profile/edit-profile.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import InputError from "@/components/ui/InputError";
//import { useSelector } from "react-redux";
//import type { RootState } from "@/store";

const EditProfileForm: FC = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<typeEditForm>({
    mode: "onChange",
    resolver: zodResolver(editProfileSchema),
    defaultValues: {
      birthdate: {
        day: "",
        month: "",
        year: "",
      },
    },
  });
  //const profileImage = useSelector((state: RootState) => state.profile.selectedFile);

  const onSubmit = (data: typeEditForm) => {
    console.log("Raw Data :", data);
    const formattedData = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      address: data.address,
      birthDay: Number(data.birthdate.day),
      birthMonth: Number(data.birthdate.month),
      birthYear: Number(data.birthdate.year),
    };
    console.log("Formatted Data:", formattedData);
  };

  return (
    <form
      className="grid grid-cols-2 grid-rows-4 gap-x-16"
      onSubmit={handleSubmit(onSubmit)}
    >
      <p className=" col-span-2 font-secondary text-3xl text-slate-900">
        Personal information
      </p>
      <div className="h-25 flex flex-col justify-start items-start gap-2">
        <Label htmlFor="name" className="font-normal text-slate-900">
          Full Name
        </Label>
        <Input
          type="text"
          id="name"
          placeholder="Full Name"
          {...register("name")}
        />
        {errors.name && InputError({ error: errors.name })}
      </div>
      <div className="h-25 flex flex-col justify-start items-start gap-2">
        <Label htmlFor="phone" className="font-normal text-slate-900">
          Phone Number
        </Label>
        <Input
          type="text"
          id="phone"
          placeholder="Phone Number"
          {...register("phone")}
        />
        {errors.phone && InputError({ error: errors.phone })}
      </div>
      <div className="h-25 flex flex-col justify-start items-start gap-2">
        <Label htmlFor="email" className="font-normal text-slate-900">
          Email
        </Label>
        <Input
          type="email"
          id="email"
          placeholder="Email"
          {...register("email")}
        />
        {errors.email && InputError({ error: errors.email })}
      </div>
      <div className="h-25 flex flex-col justify-start items-start gap-2">
        <Label htmlFor="email" className="font-normal text-slate-900">
          Your birthday
        </Label>
        <BirthdaySelector control={control} />
        {errors.birthdate && InputError({ error: errors.birthdate })}
      </div>
      <div className="h-25 col-span-2 flex flex-col justify-start items-start gap-2">
        <Label htmlFor="location" className="font-normal text-slate-900">
          Location
        </Label>
        <Input
          type="text"
          id="location"
          placeholder="location"
          {...register("address")}
        />
      </div>
      <div className="col-start-2 flex flex-col justify-center items-end">
        <Button
          disabled={isSubmitting}
          className="shadow-sm w-full bg-sky-700 hover:bg-sky-800"
        >
          Save Changes
        </Button>
      </div>
    </form>
  );
};
export default EditProfileForm;

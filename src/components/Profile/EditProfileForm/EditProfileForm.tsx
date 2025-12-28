import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import BirthdaySelector from "./BirthdaySelector";
import { useEffect, type FC } from "react";
import { useForm } from "react-hook-form";
import {
  editProfileSchema,
  type EditProfileApiData,
  type editProfileType,
} from "@/schemas/profile/edit-profile.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import InputError from "@/components/ui/InputError";
import { useShowProfile } from "@/hooks/profile/useShowProfile";
import { useEditProfile } from "@/hooks/profile/useEditProfile";

const EditProfileForm: FC = () => {
  const { data: profileData } = useShowProfile();
  const { mutate } = useEditProfile();
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<editProfileType>({
    mode: "onChange",
    resolver: zodResolver(editProfileSchema),
  });

  const onSubmit = (data: editProfileType) => {
    const apiData: EditProfileApiData = {
    name: data.name,
    email: data.email,
    mobile_number: data.mobile_number,
    location: data.location,
    birth_date: data.birth_date?.day && data.birth_date?.month && data.birth_date?.year
      ? `${data.birth_date.year.padStart(4, "0")}-${data.birth_date.month.padStart(2, "0")}-${data.birth_date.day.padStart(2, "0")}`
      : null,
  };
    mutate(apiData);
  };

  useEffect(() => {
    if (profileData) {
      let birthDateValues = {
        day: "",
        month: "",
        year: "",
      };
      if (profileData.birth_date) {
        const [year, month, day] = profileData.birth_date.split("-");
        birthDateValues = { year, month, day };
      }
      reset({
        name: profileData.name || "",
        email: profileData.email || "",
        mobile_number: profileData.mobile_number || "",
        location: profileData.location || "",
        birth_date: birthDateValues,
      });
    }
  }, [profileData, reset]);

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
        <Label htmlFor="mobile_number" className="font-normal text-slate-900">
          Phone Number
        </Label>
        <Input
          type="text"
          id="mobile_number"
          placeholder="Phone Number"
          {...register("mobile_number")}
        />
        {errors.mobile_number && InputError({ error: errors.mobile_number })}
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
        {errors.birth_date && InputError({ error: errors.birth_date})}
      </div>
      <div className="h-25 col-span-2 flex flex-col justify-start items-start gap-2">
        <Label htmlFor="location" className="font-normal text-slate-900">
          Location
        </Label>
        <Input
          type="text"
          id="location"
          placeholder="location"
          {...register("location")}
        />
        {errors.location && InputError({ error: errors.location })}
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

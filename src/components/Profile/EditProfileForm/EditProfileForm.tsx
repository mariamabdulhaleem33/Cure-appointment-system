import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import BirthdaySelector from "./BirthdaySelector";
import type { FC } from "react";

const EditProfileForm: FC = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-4 gap-y-10 gap-x-16">
      <p className="col-span-2 font-secondary text-3xl text-slate-900">
        Personal information
      </p>
      <div className="flex flex-col justify-center items-start gap-2">
        <Label htmlFor="name" className="font-normal text-slate-900">
          Full Name
        </Label>
        <Input type="text" id="name" placeholder="Full Name" />
      </div>
      <div className="flex flex-col justify-center items-start gap-2">
        <Label htmlFor="phone" className="font-normal text-slate-900">
          Phone Number
        </Label>
        <Input type="text" id="phone" placeholder="Phone Number" />
      </div>
      <div className="flex flex-col justify-center items-start gap-2">
        <Label htmlFor="email" className="font-normal text-slate-900">
          Email
        </Label>
        <Input type="email" id="email" placeholder="Email" />
      </div>
      <div className="flex flex-col justify-center items-start gap-2">
        <Label htmlFor="email" className="font-normal text-slate-900">
          Your birthday
        </Label>
        <BirthdaySelector />
      </div>
      <div className="col-span-2 flex flex-col justify-center items-start gap-2">
        <Label htmlFor="location" className="font-normal text-slate-900">
          Location
        </Label>
        <Input type="text" id="location" placeholder="location" />
      </div>
      <div className="col-start-2 flex flex-col justify-center items-end">
        <Button className="shadow-sm w-full bg-sky-700 hover:bg-sky-800">
          Save Changes
        </Button>
      </div>
    </div>
  );
};
export default EditProfileForm;

import type { ShowProfileResponse } from "@/Types/Profile.types";

export function transformProfileResponse(data: any): ShowProfileResponse {
  const user = data.user;

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    mobile_number: user.mobile_number,
    location: user.location,
    birth_date: user.birth_date,
    profile_photo: user.profile_photo,
  };
}

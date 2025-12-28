import api from "@/api/axios";
import type { ProfileResponse } from "@/api/userProfile";
import type { ChangePasswordFormData } from "@/schemas/profile/change-password.schema";
import type { EditProfileApiData } from "@/schemas/profile/edit-profile.schema";
import type { ChangePasswordResponse } from "@/Types/Profile.types";
import {transformProfileResponse} from "@/utils/profileTransformer";

export const ProfilAPI = {
  changePassword: async (
    data: ChangePasswordFormData
  ): Promise<ChangePasswordResponse> => {
    const response = await api.put<ChangePasswordResponse>(
      "/patient/profile/changePassword",
      data
    );

    return response.data;
  },

  ShowProfileDetails: async (): Promise<ProfileResponse> => {
    const response = await api.get<ProfileResponse>(
      "/patient/profile/show"
    );

    return transformProfileResponse(response.data);
  },

  editProfileDetails: async (data:EditProfileApiData): Promise<ProfileResponse> => {
    const response = await api.put<ProfileResponse>(
      "/patient/profile/update",
      data
    );

    return transformProfileResponse(response.data);
  },
};

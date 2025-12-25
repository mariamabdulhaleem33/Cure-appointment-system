import api from './axios';

export interface Birthdate {
  Day: number | null;
  Month: number | null;
  Year: number | null;
}

export interface ExtraData {
  birthdate: Birthdate;
}

export interface ProfileData {
  name: string;
  email: string;
  phone: string;
  image: string | null;
  address: string | null;
  extra_data: ExtraData;
}

export interface ProfileResponse {
  success: boolean;
  message: string;
  data: ProfileData;
}

export const getProfileAPI = async (): Promise<ProfileResponse> => {
  const response = await api.get<ProfileResponse>('/profile/show');
  return response.data;
};

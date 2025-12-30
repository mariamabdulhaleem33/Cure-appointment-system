import api from './axios';

export interface Patient {
  id: number;
  user_id: number;
  created_at: string;
  updated_at: string;
}

export interface ProfileUser {
  profile_photo: string | null;
  id: number;
  name: string;
  email: string;
  email_verified_at: string | null;
  mobile_number: string;
  birth_date: string | null;
  location: string | null;
  social_id: string | null;
  social_type: string | null;
  otp: string | null;
  otp_expires_at: string | null;
  mobile_verified: number;
  created_at: string;
  updated_at: string;
  profile_photo_url: string | null;
  patient: Patient;
}

export interface ProfileResponse {
  message: string;
  user: ProfileUser;
  patient: Patient;
}

export const getProfileAPI = async (): Promise<ProfileResponse> => {
  const response = await api.get<ProfileResponse>('/patient/profile/show');
  return response.data;
};

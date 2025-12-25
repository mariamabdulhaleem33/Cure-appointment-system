import { useQuery } from '@tanstack/react-query';
import { getProfileAPI } from '@/api/userProfile';
import { useAuthState } from './useAuth';
import { UserProfile } from '@/assets';

const mockUser = {
  name: "Seif Mohamed",
  address: "129,El-Nasr Street, Cairo",
  avatarUrl: UserProfile,
};

export const useProfile = () => {
  const { isAuthenticated } = useAuthState();

  const { data: profileResponse, isLoading, error } = useQuery({
    queryKey: ['profile'],
    queryFn: getProfileAPI,
    enabled: isAuthenticated,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });

  const profileData = profileResponse?.data;

  const user = {
    name: profileData?.name || mockUser.name,
    address: profileData?.address || mockUser.address,
    avatarUrl: profileData?.image || mockUser.avatarUrl,
  };

  return {
    user,
    isLoading,
    error,
    profileData,
  };
};


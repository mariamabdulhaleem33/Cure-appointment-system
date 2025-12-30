import { useQuery} from '@tanstack/react-query';
import { getProfileAPI } from '@/api/userProfile';
import { useAuthState } from './useAuth';
import { formatLocation } from '@/utils/formatLocation';
import { useMemo } from 'react';

export const useProfile = () => {
  const { isAuthenticated } = useAuthState();


  const { data: profileResponse, isLoading, error } = useQuery({
    queryKey: ['profile'],
    queryFn: getProfileAPI,
    enabled: isAuthenticated,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });

  const profileUser = profileResponse?.user;


  const parseLocation = (location: string | null | undefined): string | null => {
    if (!location) return null;
    try {
      return formatLocation(location);
    } catch (error) {
      console.error('Failed to parse location JSON:', error);
      return location;
    }
  };


  const user = useMemo(() => ({
    name: profileUser?.name || '',
    address: parseLocation(profileUser?.location) || null,
    avatarUrl: profileUser?.profile_photo_url || profileUser?.profile_photo || null,
  }), [profileUser?.name, profileUser?.location, profileUser?.profile_photo_url, profileUser?.profile_photo]);

  return {
    user,
    isLoading,
    error,
    profileData: profileResponse,
  };
};


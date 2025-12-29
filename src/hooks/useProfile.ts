import { useQuery } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import { getProfileAPI } from '@/api/userProfile';
import { useAuthState } from './useAuth';
import { useUserLocation } from './useUserLocation';

// Reverse geocoding function to convert coordinates to address
const reverseGeocode = async (lat: number, lng: number): Promise<string | null> => {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=10&addressdetails=1`,
      {
        headers: {
          'User-Agent': 'AppointDash/1.0', // Required by Nominatim
        },
      }
    );
    const data = await response.json();
    
    if (data.address) {
      const { city, town, village, state, country } = data.address;
      const locationName = city || town || village || state || '';
      const countryName = country || '';
      return locationName && countryName ? `${locationName}, ${countryName}` : locationName || countryName || null;
    }
    return null;
  } catch (error) {
    console.error('Reverse geocoding failed:', error);
    return null;
  }
};

export const useProfile = () => {
  const { isAuthenticated } = useAuthState();
  const { lat, lng, isLoadingLocation, geoError } = useUserLocation();
  const [detectedAddress, setDetectedAddress] = useState<string | null>(null);
  const [isLoadingGeocode, setIsLoadingGeocode] = useState(false);

  // Fetch profile from API
  const { data: profileResponse, isLoading, error } = useQuery({
    queryKey: ['profile'],
    queryFn: getProfileAPI,
    enabled: isAuthenticated,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });

  const profileUser = profileResponse?.user;
  console.log('🟢 Profile User Data:', profileUser);

  // Reverse geocode coordinates if user hasn't provided a location
  useEffect(() => {
    const shouldGeocode = !profileUser?.location && !isLoadingLocation && !geoError && lat && lng;
    
    if (!shouldGeocode) {
      return;
    }

    let cancelled = false;
    
    // Start geocoding asynchronously
    (async () => {
      setIsLoadingGeocode(true);
      try {
        const address = await reverseGeocode(lat, lng);
        if (!cancelled) {
          setDetectedAddress(address);
          setIsLoadingGeocode(false);
        }
      } catch {
        if (!cancelled) {
          setIsLoadingGeocode(false);
        }
      }
    })();
    
    return () => {
      cancelled = true;
    };
  }, [profileUser?.location, isLoadingLocation, geoError, lat, lng]);

  // Use API data first, then detected location, then null
  const user = {
    name: profileUser?.name || '',
    address: profileUser?.location || detectedAddress || null,
    avatarUrl: profileUser?.profile_photo_url || profileUser?.profile_photo || null,
  };

  return {
    user,
    isLoading: isLoading || isLoadingGeocode,
    error,
    profileData: profileResponse,
  };
};


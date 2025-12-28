import { ProfilAPI } from "@/services/profile.service";
import { useQuery } from "@tanstack/react-query";

export const useShowProfile = <T = any>(selectFn?: (data: any) => T) => {
  return useQuery({
    queryKey: ["show-profile"],
    queryFn: ProfilAPI.ShowProfileDetails,
    select: selectFn,
  });
};
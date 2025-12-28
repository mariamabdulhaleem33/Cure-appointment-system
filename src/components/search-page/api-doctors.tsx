import type { Doctor } from "./Types";
import axios from "axios";

const api = axios.create({
  baseURL: "https://round8-backend-team-one.huma-volve.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

type FetchDoctorsParams = {
  page: number;
  search: string;
  availableDate?: "today" | "tomorrow" | null;
  consultationType?: "in_clinic" | "home_visit" | null;
  gender?: string[];
  sort?: "recommended" | "price_low" | "price_high" | null;
};

export const fetchDoctors = async (params: FetchDoctorsParams): Promise<Doctor[]> => {
  const { page, search, availableDate, consultationType, gender, sort } = params;

  const queryParams: Record<string, any> = {
    page,
    search,
    limit: 9,
  };

  if (availableDate) queryParams.availableDate = availableDate;
  if (consultationType) queryParams.consultationType = consultationType;
  if (gender && gender.length > 0) queryParams.gender = gender.join(",");
  if (sort) queryParams.sort = sort;

  const { data } = await api.get("/doctors", {
    params: queryParams,
  });

  return data.data;
};

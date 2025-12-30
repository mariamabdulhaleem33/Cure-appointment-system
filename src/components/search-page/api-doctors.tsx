import type { Doctor } from "./Types";
import axios from "axios";

const api = axios.create({
  baseURL: "https://round8-cure-php-team-three.huma-volve.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

type FetchDoctorsParams = {
  page: number;
  search: string;
  specialtyId?: number;
  availableDate?: "today" | "tomorrow" | null;
  consultationType?: "in_clinic" | "home_visit" | null;
  gender?: string[];
  sort?: "recommended" | "price_low" | "price_high" | null;
};

export const fetchDoctors = async (params: FetchDoctorsParams): Promise<Doctor[]> => {
  const { page, search, specialtyId, availableDate, consultationType, gender, sort } = params;

  const queryParams: Record<string, any> = {
    page,
    search,
    specialty_id: specialtyId,
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


type Specialization = Doctor["specialization"];

export const fetchSpecialties = async (): Promise<Specialization[]> => {
  const { data } = await api.get("/doctors");

  const map = new Map<number, Specialization>();

  data.data.forEach((doctor: Doctor) => {
    if (doctor.specialization) {
      map.set(doctor.specialization.id, doctor.specialization);
    }
  });

  return Array.from(map.values());
};
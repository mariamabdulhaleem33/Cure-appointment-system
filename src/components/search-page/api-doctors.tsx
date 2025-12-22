import type { Doctor } from "./Types";
import axios from "axios";

const api = axios.create({
  baseURL: "https://round8-backend-team-one.huma-volve.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchDoctors = async (
  page: number,
  search: string
): Promise<Doctor[]> => {
  const { data } = await api.get("/doctors", {
    params: {
      page,
      search,
      limit: 9,
    },
  });

  return data.data;
};

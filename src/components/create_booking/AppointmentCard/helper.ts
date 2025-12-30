/* ================= Helpers Function ================= */
export const getMonthLabel = (date: string) => {
  if (!date) return "";
  return new Date(date).toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });
};

export const getDayName = (date: string) => {
  return new Date(date).toLocaleString("en-US", { weekday: "long" });
};

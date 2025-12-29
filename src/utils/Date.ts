export const getDays = (): string[] =>
  Array.from({ length: 31 }, (_, i) => (i+1).toString().padStart(2, "0"));

export const getYears = (count: number): number[] =>
  Array.from({ length: count }, (_, i) => new Date().getFullYear() - i);

type month = {
  label: string;
  value: string;
};

export const Months: month[] = [
  { label: "January", value: "01" },
  { label: "February", value: "02" },
  { label: "March", value: "03" },
  { label: "April", value: "04" },
  { label: "May", value: "05" },
  { label: "June", value: "06" },
  { label: "July", value: "07" },
  { label: "August", value: "08" },
  { label: "September", value: "09" },
  { label: "October", value: "10" },
  { label: "November", value: "11" },
  { label: "December", value: "12" },
];

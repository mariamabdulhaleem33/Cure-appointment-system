import z from "zod";

const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

export const signUpSchema = z.object({
  name: z.string().min(2, { message: "name must be at least 2 charcater" }).max(255),
  email: z.email({ message: "please Enter Valid email" }),
  phone: z.string().regex(/^(\+20|0)?1[0-2,5][0-9]{8}$/, { message: "please enter valid number" }),
  password: z.string().regex(passwordRegex, { message: "Password must contain uppercase, lowercase, number and special character" }),
  password_confirmation: z.string().min(8, { message: "password must be at least 8 charcater" }).max(255),
}).refine((data) => data.password === data.password_confirmation, {
  message: "Passwords do not match",
  path: ["password_confirmation"],
});

export type typeForm = z.infer<typeof signUpSchema>;
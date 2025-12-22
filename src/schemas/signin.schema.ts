import { z } from "zod";

const passwordRegex =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

export const signInSchema = z.object({
  phone: z
    .string()
    .min(1, "Phone number is required")
    .regex(/^(\+20|0)?1[0-2,5][0-9]{8}$/, {
      message: "Please enter a valid Egyptian phone number",
    }),

  password: z
    .string()
    .min(1, "Password is required")
    .regex(passwordRegex, {
      message:
        "Password must contain uppercase, lowercase, number, and special character",
    }),
});

export type SignInFormType = z.infer<typeof signInSchema>;

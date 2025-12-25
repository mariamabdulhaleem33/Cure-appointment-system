import { z } from "zod";

const passwordRegex =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

export const resetPasswordSchema = z.object({
  phone: z
    .string()
    .min(1, "Phone number is required")
    .regex(/^(\+20|0)?1[0-2,5][0-9]{8}$/, {
      message: "please enter a valid number",
    }),

  newPasswordR: z.string().min(1, "Password is required").regex(passwordRegex, {
    message:
      "Password must contain uppercase,lowercase, number, and special character",
  }),

  confirmPasswordR: z
    .string()
    .min(8, { message: "password must be at least 8 charcater" })
    .max(255),
}).refine((data) => data.newPasswordR === data.confirmPasswordR, {
  message: "Passwords do not match",
  path: ["confirm"],
});

export type resetPasswordType = z.infer<typeof resetPasswordSchema>;
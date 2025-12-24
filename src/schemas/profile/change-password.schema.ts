import { z } from "zod";

const passwordRegex =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

export const changePasswordSchema = z.object({
  currentPassword: z.string().min(1, "Password is required").regex(passwordRegex, {
    message:
      "password must be at least 8 charcater",
  }),


  newPasswordCh: z.string().min(1, "Password is required").regex(passwordRegex, {
    message:
      "Password must contain uppercase,lowercase, number, and special character",
  }),

  confirmPasswordCh: z
    .string()
    .min(8, { message: "password must be at least 8 charcater" })
    .max(255),
}).refine((data) => data.newPasswordCh === data.confirmPasswordCh, {
  message: "Passwords do not match",
  path: ["confirm"],
}).refine((data) => data.currentPassword !== data.newPasswordCh, {
  message: "New password must be different from current password",
  path: ["newPasswordCh"],
});

export type changePasswordType = z.infer<typeof changePasswordSchema>;
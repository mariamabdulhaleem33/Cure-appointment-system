import { z } from "zod";

export const changePasswordSchema = z
  .object({

    current_password: z.string().min(1, "Password is required"),

    new_password: z
      .string()
      .min(8, { message: "password must be at least 8 charcater" })
      .min(1, "Password is required"),

    new_password_confirmation: z
      .string()
      .min(8, { message: "password must be at least 8 charcater" })
      .min(1, "Password is required"),
  })
  .refine((data) => data.new_password === data.new_password_confirmation, {
    message: "Passwords do not match",
    path: ["new_password_confirmation"],
  })
  .refine((data) => data.current_password !== data.new_password, {
    message: "New password must be different from current password",
    path: ["new_password"],
  });

export type ChangePasswordFormData = z.infer<typeof changePasswordSchema>;

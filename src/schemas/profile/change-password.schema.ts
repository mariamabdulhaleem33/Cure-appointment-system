import { z } from "zod";

const Regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#?!@$%^&*-]).{8,}$/;

export const changePasswordSchema = z
  .object({
    current_password: z.string().min(1, "Current Password is required"),

    new_password: z
      .string()
      .min(1, "New Password is required")
      .regex(Regex, {
        message:
          "Password must be 8 char contains uppercase, lowercase, number and special character",
      }),

    new_password_confirmation: z
      .string()
      .min(1, "Password Confirmation is required"),
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

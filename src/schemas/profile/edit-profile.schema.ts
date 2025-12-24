import z from "zod";

export const editProfileSchema = z.object({
  name: z
    .string()
    .min(2, { message: "name must be at least 2 charcater" })
    .max(255),
  email: z.email({ message: "please Enter Valid email" }),
  phone: z.string().regex(/^(\+20|0)?1[0-2,5][0-9]{8}$/, {
    message: "please enter a valid number",
  }),
  address: z
    .string()
    .min(3, "Address must be at least 3 characters")
    .optional(),

  birthdate: z
    .object({
      day: z.string(),
      month: z.string(),
      year: z.string(),
    })
    .superRefine((value, ctx) => {
      if (!value.day || !value.month || !value.year) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "birthdate is required",
          path: [],
        });
      }
    }),
});
export type typeEditForm = z.infer<typeof editProfileSchema>;

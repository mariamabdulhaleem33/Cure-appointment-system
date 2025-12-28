import z from "zod";

export const editProfileSchema = z.object({
  name: z
    .string()
    .min(2, { message: "name must be at least 2 charcater" })
    .max(255),
  email: z.email({ message: "please Enter Valid email" }),
  mobile_number: z.string().regex(/^(0)?1[0-2,5][0-9]{8}$/, {
    message: "please enter a valid number",
  }),
  location: z
  .string()
  .min(3, { message: "Address must be at least 3 characters" })
  .nullable()
  .or(z.literal("")),

  birth_date: z
    .object({
      day: z.string().optional(),
      month: z.string().optional(),
      year: z.string().optional(),
    })
    .optional()
    .superRefine((val, ctx) => {
      if (!val?.day && !val?.month && !val?.year) {
        return;
      }

      const hasSome = !!val?.day || !!val?.month || !!val?.year;
      const hasAll = !!val?.day && !!val?.month && !!val?.year;

      if (hasSome && !hasAll) {
        ctx.addIssue({
          code: "custom",
          message: "Please complete all date fields",
          path: []
        });
      }

      if (hasAll) {
        const day = parseInt(val!.day!, 10);
        const month = parseInt(val!.month!, 10);
        const year = parseInt(val!.year!, 10);

        const date = new Date(year, month - 1, day);
        if (
          date.getFullYear() !== year ||
          date.getMonth() + 1 !== month ||
          date.getDate() !== day
        ) {
          ctx.addIssue({ code: "custom", message: "Invalid date", path: [] });
        }
      }
    })
});
export type editProfileType = z.infer<typeof editProfileSchema>;

export const editProfileApiSchema = editProfileSchema.transform((data) => ({
  ...data,
  birth_date: data.birth_date?.day && data.birth_date?.month && data.birth_date?.year
    ? `${data.birth_date.year.padStart(4, "0")}-${data.birth_date.month.padStart(2, "0")}-${data.birth_date.day.padStart(2, "0")}`
    : null,
}));

export type EditProfileApiData = z.infer<typeof editProfileApiSchema>;

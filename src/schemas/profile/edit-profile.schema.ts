import z from "zod";

const locationRegex = /^\s*([A-Za-z\s-]+)\s*,\s*([A-Za-z\s-]+)\s*$/;

export const editProfileSchema = z.object({
  name: z
    .string()
    .min(10, { message: "name must be at least 10 charcaters" })
    .max(255),
  email: z.email({ message: "please Enter Valid email" }),
  mobile_number: z.string().regex(/^(0)?1[0-2,5][0-9]{8}$/, {
    message: "please enter a valid number",
  }),
  location: z
    .string()
    .regex(locationRegex, {message: "Please enter a valid Egyptian location (e.g., Cairo, Egypt)"})
    .nullable()
    .or(z.literal(""))
    .transform((val) => {
    if (!val) return null;

    const parts = val.split(",").map(part => part.trim());
    if (parts.length !== 2) return null;

    return JSON.stringify({
      city: parts[0],
      country: parts[1],
    })
  }),

    profile_photo:z.file().optional(),

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
          path: [],
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
    }),
});
export type editProfileType = z.infer<typeof editProfileSchema>;

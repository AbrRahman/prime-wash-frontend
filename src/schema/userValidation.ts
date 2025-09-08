import z from "zod";

export const updateUpdateValidation = z.object({
  role: z.enum(["user", "admin"]),
});

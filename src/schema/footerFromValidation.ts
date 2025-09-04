import z from "zod";

export const footerFromValidation = z.object({
  name: z.string().min(1, "Please enter your full name"),
  email: z
    .string()
    .email("Please enter a valid email")
    .min(1, "Please enter a valid email"),
  message: z.string().min(1, "Message cannot be empty"),
});

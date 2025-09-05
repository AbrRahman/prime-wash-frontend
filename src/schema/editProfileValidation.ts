import z from "zod";

const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"];

export const editProfileValidation = z.object({
  name: z.string("Name is string").optional(),
  phone: z.string().optional(),
  address: z.string("String").optional(),
  image: z
    .instanceof(FileList)
    .refine(
      (files) =>
        files.length === 0 || ACCEPTED_IMAGE_TYPES.includes(files[0]?.type),
      {
        message: "Only .jpg, .png, and .webp formats are supported",
      }
    ),
});

export const passwordValidation = z.object({
  password: z.string().min(6, "New password  at least 6 characters"),
  oldPassword: z.string().min(6, "Old password  at least 6 characters"),
  confirmPassword: z.string().min(6, "Confirm password  at least 6 characters"),
});

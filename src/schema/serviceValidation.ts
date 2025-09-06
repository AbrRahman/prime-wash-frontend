import { z } from "zod";

// create product validation schema
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"];

// Helper: get image dimensions from a File
const getImageDimensions = (
  file: File
): Promise<{ width: number; height: number }> => {
  return new Promise((resolve, reject) => {
    if (!file) {
      reject(new Error("No file provided"));
      return;
    }

    const img = new Image();
    const url = URL.createObjectURL(file);

    img.onload = () => {
      resolve({ width: img.width, height: img.height });
      URL.revokeObjectURL(url);
    };

    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Failed to load image"));
    };

    img.src = url;
  });
};

// create product validation schema
export const serviceValidation = z.object({
  name: z.string().trim().min(1, "Product name is required"),

  description: z.string().trim().min(1, "Description required"),
  price: z
    .string()
    .trim()
    .min(1, "Price is required")
    .refine((val) => Number(val) >= 0, {
      message: "Price must be positive number",
    }),
  duration: z
    .string()
    .trim()
    .min(1, { message: "Duration is required" })
    .refine((val) => Number(val) >= 0, {
      message: "Quantity must be positive number",
    }),
  image: z
    .instanceof(FileList)
    .refine((files) => ACCEPTED_IMAGE_TYPES.includes(files[0]?.type), {
      message: "Only .jpg, .png, and .webp formats are supported",
    })
    .refine(
      async (files) => {
        try {
          const { width, height } = await getImageDimensions(files[0]);
          return width === 600 && height === 450;
        } catch {
          return false;
        }
      },
      { message: "Image must be at least 600x450 pixels" }
    ),
});

export const updateServiceValidation = z.object({
  name: z.string().trim().optional(),

  description: z.string().trim().optional(),
  price: z
    .string()
    .trim()
    .refine((val) => !val || Number(val) >= 0, {
      message: "Price must be positive number",
    })
    .optional(),
  duration: z
    .string()
    .trim()
    .refine((val) => !val || Number(val) >= 0, {
      message: "Quantity must be positive number",
    })
    .optional(),
  image: z
    .instanceof(FileList)
    .refine(
      (files) =>
        files.length === 0 || ACCEPTED_IMAGE_TYPES.includes(files[0]?.type),
      {
        message: "Only .jpg, .png, and .webp formats are supported",
      }
    )
    .refine(
      async (files) => {
        try {
          if (files?.length > 0) {
            const { width, height } = await getImageDimensions(files[0]);
            return width === 600 && height === 450;
          }
          return true;
        } catch {
          return false;
        }
      },
      { message: "Image must be at least 600x450 pixels" }
    )
    .optional(),
});

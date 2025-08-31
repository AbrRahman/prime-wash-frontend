import z from "zod";

const bookingFromValidation = z.object({
  vehicleType: z.string().min(1, "Vehicle type is required"),
  vehicleBrand: z.string().min(1, "Vehicle brand is required"),
  vehicleModel: z.string().min(1, "Vehicle model is required"),
  registrationPlate: z
    .string()
    .min(1, "Vehicle registration plate is required"),
});

export default bookingFromValidation;

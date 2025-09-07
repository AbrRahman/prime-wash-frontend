import z from "zod";

export const slotValidation = z.object({
  service: z.string().trim().min(1, "Service a service"),
  startTime: z.string().trim().min(5, "Start time is required, eg - 09:30"),
  endTime: z.string().trim().min(5, "Start time is required, eg - 13:30"),
});
export const updateSlotValidation = z.object({
  isBooked: z.enum(["booked", "available"]),
});

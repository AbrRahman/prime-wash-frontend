import type { TUserData } from "./auth.type";
import type { TService } from "./service.type";
import type { TSlot } from "./slot.type";

export type TBooking = {
  vehicleType: string;
  vehicleBrand: string;
  vehicleModel: string;
  registrationPlate: string;
};

export type TBookingData = {
  _id: string;
  customer?: TUserData;
  slot: TSlot;
  service: TService;
  vehicleType: string;
  vehicleBrand: string;
  vehicleModel: string;
  registrationPlate: string;
  paymentStatus: "paid" | "unpaid";
};

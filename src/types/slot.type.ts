import type { TService } from "./service.type";

export type TSlot = {
  _id: string;
  date: string;
  startTime: string;
  endTime: string;
  isBooked: "available" | "booked";
};
export type TSlotData = {
  _id: string;
  service: TService;
  date: string;
  startTime: string;
  endTime: string;
  isBooked: "available" | "booked";
};

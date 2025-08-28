export type TSlot = {
  _id: string;
  date: string;
  startTime: string;
  endTime: string;
  isBooked: "available" | "booked";
};

import { createSlice } from "@reduxjs/toolkit";
import type { TService } from "../../../types/service.type";
import type { TSlot } from "../../../types/slot.type";

type TBookingInitialState = {
  service: Partial<TService>;
  slot: Partial<TSlot>;
  bookingDate: string;
};

const initialState: TBookingInitialState = {
  service: {},
  slot: {},
  bookingDate: new Date().toISOString().slice(0, 10),
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setService: (state, actions) => {
      state.service = actions?.payload;
    },
    setSlot: (state, actions) => {
      state.slot = actions?.payload;
    },
    setBookingDate: (state, actions) => {
      state.bookingDate = actions.payload;
    },
  },
});

export const { setService, setSlot, setBookingDate } = bookingSlice.actions;

export default bookingSlice.reducer;

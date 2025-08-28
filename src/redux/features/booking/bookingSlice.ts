import { createSlice } from "@reduxjs/toolkit";

type TBookingInitialState = {
  serviceId: string;
  slotId: string;
  bookingDate: string;
};

const initialState: TBookingInitialState = {
  serviceId: "",
  slotId: "",
  bookingDate: new Date().toISOString().slice(0, 10),
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setServiceId: (state, actions) => {
      state.serviceId = actions?.payload;
    },
    setSlotId: (state, actions) => {
      state.slotId = actions?.payload;
    },
    setBookingDate: (state, actions) => {
      state.bookingDate = actions.payload;
    },
  },
});

export const { setServiceId, setSlotId, setBookingDate } = bookingSlice.actions;

export default bookingSlice.reducer;

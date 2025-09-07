import { baseApi } from "../../api/baseApi";
type TSlotParams = {
  name: string;
  value: string;
};

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSlot: builder.query({
      providesTags: ["slot"],
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TSlotParams) => {
            params.append(item.name, item.value);
          });
        }
        return {
          url: "/slot",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (data) => {
        return data?.data;
      },
    }),

    // cll payment url generate api call

    generatePaymentUrl: builder.mutation({
      query: (payload) => ({
        url: "/payment",
        method: "POST",
        body: payload,
      }),
      transformResponse: (data) => {
        return data?.data;
      },
    }),
    saveBookingInformation: builder.mutation({
      query: (payload) => ({
        url: "/booking",
        method: "POST",
        body: payload,
      }),
    }),
    deleteUnpaidBooking: builder.mutation({
      query: () => ({
        url: "/booking/unpaid",
        method: "DELETE",
      }),
    }),
    // get my all booking
    getMyAllBooking: builder.query({
      query: () => ({
        url: "/booking/my-booking",
        method: "GET",
      }),
      transformResponse: (data) => {
        return data?.data;
      },
    }),
    // get my all booking
    getMyUpcomingBooking: builder.query({
      query: () => ({
        url: "/booking/my-upcoming-booking",
        method: "GET",
      }),
      transformResponse: (data) => {
        return data?.data;
      },
    }),
  }),
});

export const {
  useGetAllSlotQuery,
  useGeneratePaymentUrlMutation,
  useSaveBookingInformationMutation,
  useDeleteUnpaidBookingMutation,
  useGetMyAllBookingQuery,
  useGetMyUpcomingBookingQuery,
} = bookingApi;

import { baseApi } from "../../api/baseApi";
type TSlotParams = {
  name: string;
  value: string;
};

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSlot: builder.query({
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
    deleteUnpaidBooking: builder.query({
      query: () => ({
        url: "/payment/fail?from=client",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetAllSlotQuery,
  useGeneratePaymentUrlMutation,
  useSaveBookingInformationMutation,
  useDeleteUnpaidBookingQuery,
} = bookingApi;

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
    getSingleSlot: builder.query({
      query: (id) => ({
        url: `/slot/${id}`,
        method: "GET",
      }),
      transformResponse: (data) => {
        return data?.data;
      },
    }),
  }),
});

export const { useGetAllSlotQuery, useGetSingleSlotQuery } = bookingApi;

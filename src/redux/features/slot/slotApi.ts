import { baseApi } from "../../api/baseApi";

const slotApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createSlot: builder.mutation({
      query: (payload) => ({
        url: `/slot`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["slot"],
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
    // update slot status
    updateSlot: builder.mutation({
      query: ({ payload, id }) => ({
        url: `/slot/${id}`,
        method: "PUT",
        body: payload,
      }),
      invalidatesTags: ["slot"],
    }),
    deleteSlot: builder.mutation({
      query: (id) => ({
        url: `/slot/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["slot"],
    }),
  }),
});

export const {
  useDeleteSlotMutation,
  useCreateSlotMutation,
  useUpdateSlotMutation,
  useGetSingleSlotQuery,
} = slotApi;

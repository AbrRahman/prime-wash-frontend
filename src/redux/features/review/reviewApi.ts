import { baseApi } from "../../api/baseApi";

const reviewApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllReview: builder.query({
      providesTags: ["review"],
      query: () => ({
        url: "/review",
        method: "GET",
      }),
      transformResponse: (data) => {
        return data?.data;
      },
    }),
  }),
});

export const { useGetAllReviewQuery } = reviewApi;

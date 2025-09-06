import { baseApi } from "../../api/baseApi";
type TServiceParams = {
  name: string;
  value: string;
};
const serviceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllService: builder.query({
      providesTags: ["service"],
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TServiceParams) => {
            params.append(item.name, item.value);
          });
        }
        return {
          url: `/service`,
          method: "GET",
          params: params,
        };
      },
      transformResponse: (data) => {
        return data.data;
      },
    }),
    getSingleService: builder.query({
      query: (args) => ({
        url: `/service/${args}`,
        method: "GET",
      }),
      transformResponse: (data) => {
        return data?.data;
      },
    }),

    // create service by admin
    createService: builder.mutation({
      query: (payload) => ({
        url: "/service",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["service"],
      transformResponse: (data) => {
        return data;
      },
    }),

    // delete service by admin
    deleteService: builder.mutation({
      query: (id) => ({
        url: `/service/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["service"],
      transformResponse: (data) => {
        return data;
      },
    }),
  }),
});

export const {
  useGetAllServiceQuery,
  useGetSingleServiceQuery,
  useCreateServiceMutation,
  useDeleteServiceMutation,
} = serviceApi;

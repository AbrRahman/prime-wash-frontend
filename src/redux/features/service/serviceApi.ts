import { baseApi } from "../../api/baseApi";
type TServiceParams = {
  name: string;
  value: string;
};
const serviceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllService: builder.query({
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
        console.log(data);
        return data.data;
      },
    }),
  }),
  // overrideExisting: false,
});

export const { useGetAllServiceQuery } = serviceApi;

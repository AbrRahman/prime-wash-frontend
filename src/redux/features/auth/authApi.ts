import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (payload) => ({
        url: "/user",
        method: "POST",
        body: payload,
      }),
    }),
    login: builder.mutation({
      query: (payload) => ({
        url: "auth/login",
        method: "POST",
        body: payload,
      }),
      transformResponse: (data) => {
        return data?.data;
      },
    }),
    // for google authentication data post
    googleLogin: builder.mutation({
      query: (payload) => ({
        url: "auth/google-login",
        method: "POST",
        body: payload,
      }),
      transformResponse: (data) => {
        return data;
      },
    }),
  }),
});

export const {
  useCreateUserMutation,
  useGoogleLoginMutation,
  useLoginMutation,
} = authApi;

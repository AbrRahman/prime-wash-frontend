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
    googleLogin: builder.mutation({
      query: (payload) => ({
        url: "auth/google-login",
        method: "POST",
        body: payload,
      }),
      transformResponse: (data) => {
        return data?.data;
      },
    }),
  }),
});

export const { useCreateUserMutation, useGoogleLoginMutation } = authApi;

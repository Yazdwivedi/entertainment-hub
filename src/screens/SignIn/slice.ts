import { apiSlice } from '../../store/api-slice';

export const signinAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signInUser: builder.mutation({
      query: (data) => ({
        url: `auth/signin`,
        method: "POST",
        body: data
      })
    }),
  }),
});
export const { useSignInUserMutation } = signinAPI;

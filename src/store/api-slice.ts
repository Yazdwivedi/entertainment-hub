import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "entHubSlice",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4200/" }),
  endpoints: () => ({}),
});

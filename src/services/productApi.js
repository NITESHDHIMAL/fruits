// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'localhost:8000' }),
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: () => `/product`,
    }),
  }),
})


export const { useGetProductQuery } = productApi


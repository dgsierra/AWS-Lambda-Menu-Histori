import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const ORDER_API = 'https://xbgrnp37ak.execute-api.us-east-2.amazonaws.com/'

export const orderApi = createApi({
  reducerPath: 'orderApi',
  baseQuery: fetchBaseQuery({
    baseUrl: ORDER_API,
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json')
      headers.set('Host', 'xbgrnp37ak.execute-api.us-east-2.amazonaws.com')
      return headers
    }
  }),
  endpoints: (builder) => ({
    getOrders: builder.query({
      query: () => 'orders'
    }),
    postOrder: builder.mutation({
      query: (body) => ({
        url: 'orders',
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Host: 'xbgrnp37ak.execute-api.us-east-2.amazonaws.com',
          accept: 'application/json'
        },
        body: body
      })
    })
  })
})

export const { useGetOrdersQuery, usePostOrderMutation } = orderApi

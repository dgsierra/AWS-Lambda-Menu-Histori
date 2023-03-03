import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const MENU_API = 'https://xbgrnp37ak.execute-api.us-east-2.amazonaws.com/'

export const menuApi = createApi({
  reducerPath: 'menuApi',
  baseQuery: fetchBaseQuery({
    baseUrl: MENU_API,
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json')
      headers.set('Host', 'xbgrnp37ak.execute-api.us-east-2.amazonaws.com')
      return headers
    }
  }),
  endpoints: (builder) => ({
    getMenu: builder.query({
      query: () => 'items'
    }),
    postMenu: builder.mutation({
      query: (body) => ({
        url: 'items',
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

export const { useGetMenuQuery, usePostMenuMutation } = menuApi

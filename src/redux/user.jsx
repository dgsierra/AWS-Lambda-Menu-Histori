import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const USER_API = 'https://xbgrnp37ak.execute-api.us-east-2.amazonaws.com/'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: USER_API,
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json')
      headers.set('Host', 'xbgrnp37ak.execute-api.us-east-2.amazonaws.com')
      return headers
    }
  }),
  endpoints: (builder) => ({
    getUser: builder.query({
      // eslint-disable-next-line quotes
      query: (id) => `users/${id}`
    }),
    postUser: builder.mutation({
      query: (body) => ({
        url: 'users',
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

export const { useGetUserQuery, usePostUserMutation } = userApi

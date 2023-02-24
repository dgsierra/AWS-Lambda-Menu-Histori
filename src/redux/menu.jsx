import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const MENU_API = 'https://xbgrnp37ak.execute-api.us-east-2.amazonaws.com/items'

export const menuApi = createApi({
  reducerPath: 'menuApi',
  baseQuery: fetchBaseQuery({ baseUrl: MENU_API }),
  endpoints: (builder) => ({
    getMenu: builder.query({
      query: () => 'items'
    })
  })
})

export const { useGetMenuQuery } = menuApi

/* eslint-disable import/no-extraneous-dependencies */
import { configureStore } from '@reduxjs/toolkit'
// import { setupListeners } from '@reduxjs/toolkit/query'
import { menuApi } from './menu'

export default configureStore({
  reducer: {
    [menuApi.reducerPath]: menuApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(menuApi.middleware)
})

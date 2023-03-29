import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {},
  loading: false,
  errors: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUserByIdStart: (state) => {
      state.loading = true
    },
    getUserByIdSuccess: (state, action) => {
      state.user = action.payload
      state.loading = false
    },
    getUserByIdFailure: (state, action) => {
      state.loading = false
      state.errors = action.payload
    }
  }
})

export const { getUserByIdStart, getUserByIdSuccess, getUserByIdFailure } = userSlice.actions

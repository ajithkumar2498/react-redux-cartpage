import { configureStore } from '@reduxjs/toolkit'
import CartSliceReducer from './CartSlice'
export const store = configureStore({
  reducer: {
    Cart:CartSliceReducer,
  },
})
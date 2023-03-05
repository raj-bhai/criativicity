import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slices/counterSlice'
import dummyData from './slices/dumDataSlice'
export const store = configureStore({
  reducer: {
    counter: counterSlice,
    dummyData :dummyData
  },
})
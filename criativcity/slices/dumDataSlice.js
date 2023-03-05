import { createSlice } from '@reduxjs/toolkit'
import {course} from '../constants/course'


export const dummyData = createSlice({
  name: 'dummyData',
  initialState :{
    data:course
  },
  reducers: {
    // setDummyData(state, action){

    // }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = dummyData.actions

export default dummyData.reducer
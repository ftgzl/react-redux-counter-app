import {createSlice} from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducer: {},
})


export default counterSlice.reducer
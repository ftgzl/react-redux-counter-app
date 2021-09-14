import {configureStore} from '@reduxjs/toolkit'

import counterReducers from './counter/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducers,
  },
});
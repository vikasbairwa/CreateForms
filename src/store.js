import { configureStore } from '@reduxjs/toolkit'
import radio from './slice'
export default configureStore({
  reducer: {
    radio
  },
})
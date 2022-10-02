import { configureStore } from '@reduxjs/toolkit'
import bookResultsReducer from '../utils/bookResultsSlice'

export default configureStore({
    reducer: {
        bookResults: bookResultsReducer,
    },
})
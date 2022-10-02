import { configureStore } from '@reduxjs/toolkit'
import bookResultsReducer from '../utils/bookResultsSlice'
import resultsStateReducer from '../utils/resultsStateSlice'

export default configureStore({
    reducer: {
        bookResults: bookResultsReducer,
        resultsState: resultsStateReducer,
    },
})
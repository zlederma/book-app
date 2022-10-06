import { configureStore } from '@reduxjs/toolkit'
import bookResultsReducer from '../utils/bookResultsSlice'
import resultsStateReducer from '../utils/resultsStateSlice'
import libraryReducer from '../utils/librarySlice'

export default configureStore({
    reducer: {
        bookResults: bookResultsReducer,
        resultsState: resultsStateReducer,
        library: libraryReducer,
    },
})
import { configureStore } from '@reduxjs/toolkit'
import bookResultsReducer from './bookResultsSlice'
import resultsStateReducer from './resultsStateSlice'
import libraryReducer from './librarySlice'

export default configureStore({
    reducer: {
        bookResults: bookResultsReducer,
        resultsState: resultsStateReducer,
        library: libraryReducer,
    },
})
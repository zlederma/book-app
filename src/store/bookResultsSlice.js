//Holds the current book data
import { createSlice } from '@reduxjs/toolkit'

export const bookResultsSlice = createSlice({
    name: 'bookResults',
    initialState: {
        value: [],
    },
    reducers: {
        update: (state, action) => {
            state.value = action.payload;
        }
    },
})

export const { update } = bookResultsSlice.actions

export default bookResultsSlice.reducer
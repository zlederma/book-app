//Holds the current book data
import { createSlice } from '@reduxjs/toolkit'

export const librarySlice = createSlice({
    name: 'library',
    initialState: {
        value: [],
    },
    reducers: {
        add: (state, action) => {
            state.value = action.payload;
        },
        remove: (state, action) => {
            state.value = action.payload;
        }
    },
})

export const { add, remove } = librarySlice.actions

export default librarySlice.reducer
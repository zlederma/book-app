//tells whether or not the results display should be visisble or not
//true for open and false for closed
import { createSlice } from '@reduxjs/toolkit'

export const resultsStateSlice = createSlice({
    name: 'resultsState',
    initialState: {
        value: false,
    },
    reducers: {
        open: (state) => {
            state.value = true;
        },
        close: (state) => {
            state.value = false;
        }
    },
})

export const { open, close } = resultsStateSlice.actions

export default resultsStateSlice.reducer
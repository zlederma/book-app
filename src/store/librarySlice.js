//Holds the current book data
import { createSlice } from '@reduxjs/toolkit'

export const librarySlice = createSlice({
    name: 'library',
    initialState: {
        value: [],
    },
    reducers: {
        add: (state, action) => {
            state.value.push(action.payload);
        },
        remove: (state, action) => {
            const title = action.payload.title;
            const author = action.payload.author;
            for (let i = 0; i < state.value.length; i++) {
                if (state.value[i].title === title) {
                    if (state.value[i].author === author) {
                        state.value.splice(i, 1);
                        return
                    }
                }
            }

        }
    },
})

export const { add, remove } = librarySlice.actions

export default librarySlice.reducer
import { createSlice } from '@reduxjs/toolkit'
import { getShowTimes } from './showTimesAction'

const initialState = {
    showTimesMovies: []
}

export const showTimesSlice = createSlice({
    name: 'showTimesMovies',
    initialState,
    reducers: {
        initialShowTime: (state) => {
            state.showTimesMovies = []
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getShowTimes.pending, (state) => {
                // state.loading = true
                // state.error = ''
            })
            .addCase(getShowTimes.fulfilled, (state, action) => {
                // state.loading = false
                state.showTimesMovies = action.payload
            })
            .addCase(getShowTimes.rejected, (state, action) => {
                // state.loading = false
                state.showTimesMovies = []
                // state.error = action.error.message
            })
    }
})

export const { initialShowTime } = showTimesSlice.actions

export default showTimesSlice.reducer
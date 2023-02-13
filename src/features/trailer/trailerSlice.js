import { createSlice } from '@reduxjs/toolkit'
import { showTrailer, hideTrailer } from './trailerActions'


const initialState = {
    trailerMovie: {},
    isOpen: false
}

export const trailerSlice = createSlice({
    name: 'trailerSlice',
    initialState,
    reducers: {
        initialTrailer: (state) => {
            state.trailerMovie = {}
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(showTrailer.pending, (state) => {
                // state.loading = true
                // state.error = ''
                state.isOpen = false
            })
            .addCase(showTrailer.fulfilled, (state, action) => {
                // state.loading = false
                state.trailerMovie = action.payload
                state.isOpen = true
            })
            .addCase(showTrailer.rejected, (state, action) => {
                // state.loading = false
                state.userInfo = action.payload
                state.isOpen = false
                // state.error = action.error.message
            })
            // 
            .addCase(hideTrailer.pending, (state, action) => {
                state.isOpen = true
            })
            .addCase(hideTrailer.fulfilled, (state, action) => {
                state.isOpen = false
                state.trailerMovie = action.payload
            })
            .addCase(hideTrailer.rejected, (state, action) => {
                state.isOpen = true
            })
    }
})

export const { initialTrailer } = trailerSlice.actions

export default trailerSlice.reducer
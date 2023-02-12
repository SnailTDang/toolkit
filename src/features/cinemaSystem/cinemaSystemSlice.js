import { createSlice } from '@reduxjs/toolkit'

import { getCinamSystem } from './cinemaSystemAction'

const initialState = {
    cinemaSystem: []
}

export const cinemaSystemSlice = createSlice({
    name: 'cinemaSystem',
    initialState,
    reducers: {
        initialCinemaSystem: (state) => {
            state.cinemaSystem = []
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCinamSystem.pending, (state) => {
                // state.loading = true
                // state.error = ''
            })
            .addCase(getCinamSystem.fulfilled, (state, action) => {
                // state.loading = false
                state.cinemaSystem = action.payload
            })
            .addCase(getCinamSystem.rejected, (state, action) => {
                // state.loading = false
                state.cinemaSystem = []
                // state.error = action.error.message
            })
    }
})

export const { initialCinemaSystem } = cinemaSystemSlice.actions

export default cinemaSystemSlice.reducer
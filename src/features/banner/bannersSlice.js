import { createSlice } from '@reduxjs/toolkit'

import { getBanners } from './bannersAction'

const initialState = {
    bannersList: []
}

export const bannersSlice = createSlice({
    name: 'banners',
    initialState,
    reducers: {
        initialBanners: (state) => {
            state.bannersList = []
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getBanners.pending, (state) => {
                // state.loading = true
                // state.error = ''
            })
            .addCase(getBanners.fulfilled, (state, action) => {
                // state.loading = false
                // console.log(action.payload)
                // console.log(state.bannersList)
                state.bannersList = action.payload
            })
            .addCase(getBanners.rejected, (state, action) => {
                // state.loading = false
                state.bannersList = []
                // state.error = action.error.message
            })
    }
})

export const { initialBanners } = bannersSlice.actions

export default bannersSlice.reducer
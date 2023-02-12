import { createSlice } from '@reduxjs/toolkit'

import { getListMovies } from './moviesAction'

const initialState = {
    listMovies: {
        arrayMovie: [],
        arrayMovieDefault: [],
        coming: null,
        showing: null,
    }
}

export const listMoviesSlice = createSlice({
    name: 'listMovies',
    initialState,
    reducers: {
        initiallistMovies: (state) => {
            state.listMovies = {}
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getListMovies.pending, (state) => {
                // state.loading = true
                // state.error = ''
            })
            .addCase(getListMovies.fulfilled, (state, action) => {
                // state.loading = false
                // console.log(action.payload)
                state.listMovies.arrayMovie = action.payload
                state.listMovies.arrayMovieDefault = action.payload
                state.listMovies.showing = true
            })
            .addCase(getListMovies.rejected, (state, action) => {
                // state.loading = false
                state.listMovies.arrayMovie = []
                // state.error = action.error.message
            })
    }
})

export const { initiallistMovies } = listMoviesSlice.actions

export default listMoviesSlice.reducer
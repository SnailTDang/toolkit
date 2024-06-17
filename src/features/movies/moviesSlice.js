import { createSlice } from "@reduxjs/toolkit";

import { getListMovies, getDetailMovie } from "./moviesAction";

const initialState = {
    listMovies: {
        arrayMovie: [],
        arrayMovieDefault: [],
        coming: null,
        showing: null,
    },
    detailMovie: {},
};

export const listMoviesSlice = createSlice({
    name: "listMovies",
    initialState,
    reducers: {
        initiallistMovies: (state) => {
            state.listMovies = {};
        },
        initialDetailMovie: (state) => {
            state.detailMovie = {};
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getListMovies.pending, (state) => {})
            .addCase(getListMovies.fulfilled, (state, action) => {
                state.listMovies.arrayMovie = action.payload;
                state.listMovies.arrayMovieDefault = action.payload;
                state.listMovies.showing = true;
            })
            .addCase(getListMovies.rejected, (state, action) => {
                state.listMovies.arrayMovie = [];
            })
            //
            // .addCase(getListMovies.pending, (state) => {})
            // .addCase(getListMovies.fulfilled, (state, action) => {
            //     state.listMovies.arrayMovie = action.payload;
            //     state.listMovies.arrayMovieDefault = action.payload;
            //     state.listMovies.coming = true;
            // })
            // .addCase(getListMovies.rejected, (state, action) => {
            //     state.listMovies.arrayMovie = [];
            // })
            //
            .addCase(getDetailMovie.pending, (state, action) => {
                state.detailMovie = [];
            })
            .addCase(getDetailMovie.fulfilled, (state, action) => {
                state.detailMovie = action.payload;
            })
            .addCase(getDetailMovie.rejected, (state, action) => {
                state.detailMovie = [];
            });
    },
});

export const { initiallistMovies } = listMoviesSlice.actions;

export default listMoviesSlice.reducer;

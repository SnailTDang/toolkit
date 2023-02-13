import { createAsyncThunk } from '@reduxjs/toolkit'
import { moviesManager } from '../../services/MoviesManager'
import { cinemaServices } from '../../services/CinemaServices'

export const getListMovies = createAsyncThunk(
    'getListMovies',
    async (params, { rejectWithValue }) => {
        try {
            const response = await moviesManager.getListMovies(params)
            console.log(response)
            return response.data
        } catch (err) {
            return rejectWithValue(err.data)
        }
    }
)

export const getDetailMovie = createAsyncThunk(
    'getDetailMovie',
    async (params, { rejectWithValue }) => {
        try {
            const response = await cinemaServices.getShowtimeMovie(params)
            console.log(response)
            return response.data
        } catch (err) {
            return rejectWithValue(err.data)
        }
    }
)
import { createAsyncThunk } from '@reduxjs/toolkit'
// import { cinemaServices } from '../../services/CinemaServices'
// import { TicketsServices } from '../../services/TicketsServices'

export const showTrailer = createAsyncThunk(
    'showTrailerAction',
    async (params, { rejectWithValue }) => {
        try {
            return params
        } catch (err) {
            return rejectWithValue(err.response.data)
        }
    }
)

export const hideTrailer = createAsyncThunk(
    'hideTrailer',
    async (params, { rejectWithValue }) => {
        try {
            return params
        } catch (err) {
            return rejectWithValue(err.data)
        }
    }
)
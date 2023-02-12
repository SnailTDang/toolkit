import { createAsyncThunk } from '@reduxjs/toolkit'
import { cinemaServices } from '../../services/CinemaServices'


export const getShowTimes = createAsyncThunk(
    'getShowTimes',
    async (params, { rejectWithValue }) => {
        try {
            const response = await cinemaServices.getShowtimeMovie(params)
            return response.data
        } catch (err) {
            return rejectWithValue(err.data)
        }
    }
)
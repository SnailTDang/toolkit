import { createAsyncThunk } from '@reduxjs/toolkit'
import { cinemaServices } from '../../services/CinemaServices'

export const getCinamSystem = createAsyncThunk(
    'getCinamSystem',
    async (params, { rejectWithValue }) => {
        try {
            const response = await cinemaServices.getListCinema(params)
            return response.data
        } catch (err) {
            return rejectWithValue(err.data)
        }
    }
)
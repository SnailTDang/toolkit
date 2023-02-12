import { createAsyncThunk } from '@reduxjs/toolkit'
import { moviesManager } from '../../services/MoviesManager'

export const getBanners = createAsyncThunk(
    'getBanners',
    async (params, { rejectWithValue }) => {
        try {
            const response = await moviesManager.getListBanners(params)
            // console.log(response)
            return response.data
        } catch (err) {
            return rejectWithValue(err.data)
        }
    }
)
import { createAsyncThunk } from '@reduxjs/toolkit'
import { userServices } from '../../services/UserServices'

export const userLoginAction = createAsyncThunk(
    'userLogin',
    async (params, { rejectWithValue }) => {
        try {
            const response = await userServices.postUserLogin(params)
            return response
        } catch (err) {
            return rejectWithValue(err.response)
        }
    }
)

export const userSingin = createAsyncThunk(
    'userSingin',
    async (params, { rejectWithValue }) => {
        try {
            const response = await userServices.postUserSignIn(params)
            return response
        } catch (err) {
            return rejectWithValue(err.response)
        }
    }
)

export const getTicketsUserLogin = createAsyncThunk(
    'getTicketsUserLogin',
    async (params, { rejectWithValue }) => {
        try {
            const response = await userServices.checkTicketsUser(params)
            return response.data
        } catch (err) {
            return rejectWithValue(err.response)
        }
    }
)
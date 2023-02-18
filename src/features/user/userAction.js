import { createAsyncThunk } from '@reduxjs/toolkit'
import { userServices } from '../../services/UserServices'

export const userLoginAction = createAsyncThunk(
    'userLogin',
    async (params, { rejectWithValue }) => {
        try {
            const response = await userServices.postUserLogin(params)
            // console.log(response)
            return response.data
        } catch (err) {
            // console.log(err)
            return rejectWithValue(err.response.data)
        }
    }
)

export const userSingin = createAsyncThunk(
    'userSingin',
    async (params, { rejectWithValue }) => {
        try {
            const response = await userServices.postUserSignIn(params)
            return response.data
        } catch (err) {
            return rejectWithValue(err.response.data)
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
            return rejectWithValue(err.response.data)
        }
    }
)
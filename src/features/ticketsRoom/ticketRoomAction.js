import { createAsyncThunk } from '@reduxjs/toolkit'
// import { cinemaServices } from '../../services/CinemaServices'
import { ticketsServices } from '../../services/TicketsServices'

export const getTicketRoom = createAsyncThunk(
    'getTicketRoom',
    async (params, { rejectWithValue }) => {
        try {
            const response = await ticketsServices.getTicketCinema(params)
            // console.log(response.data)
            return response.data
        } catch (err) {
            return rejectWithValue(err.data)
        }
    }
)

export const bookTicketAction = createAsyncThunk(
    'bookTicket',
    async (params, { rejectWithValue }) => {
        try {
            const response = await ticketsServices.postTicketMovie(params)
            return response.data
        } catch (err) {
            // console.log(err)
            return rejectWithValue(err.response)
        }
    }
)

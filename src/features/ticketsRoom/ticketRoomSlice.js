import { createSlice } from '@reduxjs/toolkit'
import { getTicketRoom } from './ticketRoomAction'

const initialState = {
    ticketRoom: []
}

export const ticketRoomSlice = createSlice({
    name: 'ticketRoom',
    initialState,
    reducers: {
        initialTicketRoom: (state) => {
            state.ticketRoom = []
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getTicketRoom.pending, (state) => {
                // state.loading = true
                // state.error = ''
            })
            .addCase(getTicketRoom.fulfilled, (state, action) => {
                // state.loading = false
                state.ticketRoom = action.payload.items
            })
            .addCase(getTicketRoom.rejected, (state, action) => {
                // state.loading = false
                state.ticketRoom = []
                // state.error = action.error.message
            })
    }
})

export const { initialTicketRoom } = ticketRoomSlice.actions

export default ticketRoomSlice.reducer
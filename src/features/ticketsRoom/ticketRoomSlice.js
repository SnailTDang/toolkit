import { createSlice } from '@reduxjs/toolkit'
import { getTicketRoom, bookTicketAction } from './ticketRoomAction'

const initialState = {
    ticketRoom: [],
    selectingSeats: [],
    tabDefault: "1"
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
            // 
            .addCase(bookTicketAction.pending, (state) => {

            })
    }
})

export const { initialTicketRoom } = ticketRoomSlice.actions

export default ticketRoomSlice.reducer
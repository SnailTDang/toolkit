import { createSlice } from '@reduxjs/toolkit'
import { getTicketRoom, bookTicketAction } from './ticketRoomAction'

const initialState = {
    ticketRoom: {
        thongTinPhim: {},
        danhSachGhe: []
    },
    selectingSeats: [],
    tabDefault: "1"
}

export const ticketRoomSlice = createSlice({
    name: 'ticketRoom',
    initialState,
    reducers: {
        initialTicketRoom: (state) => {
            state.ticketRoom = []
        },
        changeTab: (state, action) => {
            // console.log(action)
            state.tabDefault = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getTicketRoom.pending, (state) => {
                // useLoading.show()
                // dispatch(startLoading())
                // state.loading = true
                // state.error = ''
            })
            .addCase(getTicketRoom.fulfilled, (state, action) => {
                // state.loading = false    
                state.ticketRoom.thongTinPhim = action.payload.thongTinPhim
                state.ticketRoom.danhSachGhe = action.payload.danhSachGhe
                // useLoading.hide()
                // stopLoading()
            })
            .addCase(getTicketRoom.rejected, (state, action) => {
                // state.loading = false
                // stopLoading()
                state.ticketRoom = []
                // state.error = action.error.message
            })
            // 
            .addCase(bookTicketAction.pending, (state) => {

            })
            .addCase(bookTicketAction.fulfilled, (state) => {
                state.tabDefault = '2'
            })
            .addCase(bookTicketAction.rejected, (state, action) => {
                console.log(action.payload.data)
            })
    }
})

export const { initialTicketRoom, changeTab } = ticketRoomSlice.actions

export default ticketRoomSlice.reducer
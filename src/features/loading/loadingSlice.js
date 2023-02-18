import { createSlice } from '@reduxjs/toolkit'
// import { getTicketRoom, bookTicketAction } from './ticketRoomAction'

const initialState = {
    isLoading: false
}

// export const getLoadingStart = () => {
//     return true
// }

// export const stopLoading = () => {
//     return false
// }

export const loadingSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        startLoading: (state) => {
            console.log('ssssss', state)
            state.isLoading = true
        },
        stopLoading: (state) => {
            state.isLoading = false
        }
    }
})

export const { startLoading, stopLoading } = loadingSlice.actions

export default loadingSlice.reducer
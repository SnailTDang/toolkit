import { createSlice } from '@reduxjs/toolkit'
import { userLoginAction, userSingin } from './userAction'
import { USER_LOGIN, TOKEN_CYBER } from '../../constants/baseSettings/settings'

const initialState = {
    userLogin: localStorage.getItem(USER_LOGIN) ? JSON.parse(localStorage.getItem(USER_LOGIN)) : {},
    userInfo: {},
    loginfail: '',
    signinfail: '',
}

export const userSlice = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {
        initialUser: (state) => {
            state.userInfo = {}
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(userLoginAction.pending, (state) => {
                // state.loading = true
                // state.error = ''
            })
            .addCase(userLoginAction.fulfilled, (state, action) => {
                // state.loading = false
                state.userLogin = action.value
                state.loginfail = ""
                localStorage.setItem(USER_LOGIN, JSON.stringify(action.value))
                localStorage.setItem(TOKEN_CYBER, JSON.stringify(action.value.accessToken))
            })
            .addCase(userLoginAction.rejected, (state, action) => {
                // state.loading = false
                state.userInfo = action.value
                // state.error = action.error.message
            })
            // 
            .addCase(userSingin.rejected, (state, action) => {
                state.signinfail = action.value
            })
    }
})

export const { initialUser } = userSlice.actions

export default userSlice.reducer
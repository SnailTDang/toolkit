import { createSlice } from '@reduxjs/toolkit'
import { userLoginAction, userSingin } from './userAction'
import { USER_LOGIN, TOKEN_CYBER } from '../../constants/baseSettings/settings'

let isLogin = localStorage.getItem(USER_LOGIN)

const initialState = {
    userLogin: isLogin ? JSON.parse(localStorage.getItem(USER_LOGIN)) : {},
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
                console.log(action)
                state.userLogin = action.payload
                state.loginfail = ""
                localStorage.setItem(USER_LOGIN, JSON.stringify(action.payload))
                localStorage.setItem(TOKEN_CYBER, JSON.stringify(action.payload.accessToken))

            })
            .addCase(userLoginAction.rejected, (state, action) => {
                // state.loading = false
                state.userInfo = action.payload
                // state.error = action.error.message
            })
            // 
            .addCase(userSingin.rejected, (state, action) => {
                state.signinfail = action.payload
            })
    }
})

export const { initialUser } = userSlice.actions

export default userSlice.reducer
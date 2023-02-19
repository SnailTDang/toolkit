import { createSlice } from '@reduxjs/toolkit'
import { getTicketsUserLogin, userLoginAction, userSingin } from './userAction'
import { USER_LOGIN, TOKEN_CYBER } from '../../constants/baseSettings/settings'
import { checkLogin } from '../../App'

let isLogin = checkLogin()

const initialState = {
    userLogin: isLogin ? JSON.parse(localStorage.getItem(USER_LOGIN)) : {},
    userInfo: null,
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
                // console.log(action.payload)
                state.loginfail = ""
                state.userLogin = action.payload.data
                localStorage.setItem(USER_LOGIN, JSON.stringify(action.payload.data))
                localStorage.setItem(TOKEN_CYBER, JSON.stringify(action.payload.data.accessToken))

            })
            .addCase(userLoginAction.rejected, (state, action) => {
                // state.loading = false
                state.loginfail = action.payload
                // state.error = action.error.message
            })
            // 
            .addCase(userSingin.pending, (state, action) => {
                state.signinfail = ''
                // console.log(action.payload)
            })
            .addCase(userSingin.fulfilled, (state, action) => {
                state.signinfail = ''
                // console.log(action.payload)
            })
            .addCase(userSingin.rejected, (state, action) => {
                state.signinfail = action.payload.data
                // console.log(action.payload)
            })
            //
            .addCase(getTicketsUserLogin.pending, (state) => {
                // state.loading = true
                // state.error = ''
            })
            .addCase(getTicketsUserLogin.fulfilled, (state, action) => {
                // state.loading = false
                // console.log(action)
                state.userInfo = action.payload
                // state.loginfail = ""
                // localStorage.setItem(USER_LOGIN, JSON.stringify(action.payload))
                // localStorage.setItem(TOKEN_CYBER, JSON.stringify(action.payload.accessToken))

            })
            .addCase(getTicketsUserLogin.rejected, (state, action) => {
                // state.loading = false
                state.loginfail = action.payload
                // state.error = action.error.message
            })
    }
})

export const { initialUser } = userSlice.actions

export default userSlice.reducer
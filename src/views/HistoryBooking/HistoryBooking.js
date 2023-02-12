import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTicketsUserLogin } from '../../features/user/userAction'
import { USER_LOGIN } from '../../constants/baseSettings/settings'
import BookTickets from '../Checkout/BookTickets/BookTickets'


export default function HistoryBooking() {
    const userInfoLocal = JSON.parse(localStorage.getItem(USER_LOGIN))
    const { userInfo } = useSelector(state => state.UserLoginReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        // console.log(userInfoLocal)
        if (userInfoLocal.taiKhoan) {
            // console.log(userInfo)
            dispatch(getTicketsUserLogin({ taiKhoan: userInfoLocal.taiKhoan }))
        }
    }, [])
    return (
        <div className="container">
            <h1 className="text-2xl text-orange-main font-bold text-center pt-5">HISTORY BOOKING</h1>
            <BookTickets userInfo={userInfo} />
        </div>
    )
}

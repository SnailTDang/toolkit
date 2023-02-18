import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTicketsUserLogin } from '../../features/user/userAction'
import { USER_LOGIN } from '../../constants/baseSettings/settings'
import BookTickets from '../Checkout/BookTickets/BookTickets'
import { stopLoading } from '../../features/loading/loadingSlice'


export default function HistoryBooking() {
    const userInfoLocal = JSON.parse(localStorage.getItem(USER_LOGIN))
    const { userInfo } = useSelector(state => state.userReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        console.log(userInfoLocal)
        // console.log(userInfo)
        dispatch(getTicketsUserLogin({ taiKhoan: userInfoLocal.taiKhoan }))
        // dispatch(stopLoading())
    }, [])
    return (
        <div className="container">
            <h1 className="text-2xl text-orange-main font-bold text-center pt-5">HISTORY BOOKING</h1>
            <BookTickets userInfo={userInfo} />
        </div>
    )
}

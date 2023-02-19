import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTicketsUserLogin } from '../../features/user/userAction'
import BookTickets from '../Checkout/BookTickets/BookedTickets'
import { checkLogin } from '../../App'
import { startLoading, stopLoading } from '../../features/loading/loadingSlice'


export default function HistoryBooking() {
    const isLogin = checkLogin()
    const { userInfo } = useSelector(state => state.userReducer)
    const dispatch = useDispatch()

    const fetchTicketsOfUser = ()=> {
        let account = JSON.parse(isLogin)
        dispatch(startLoading())
        dispatch(getTicketsUserLogin({ taiKhoan: account.taiKhoan }))
        .then(()=> {
            dispatch(stopLoading())
        })
    }
    useEffect(() => {
        fetchTicketsOfUser()
    }, [])
    return (
        <div className="container">
            {/* {console.log(userInfo)} */}
            <h1 className="text-2xl text-orange-main font-bold text-center pt-5">HISTORY BOOKING</h1>
            <BookTickets userInfo={userInfo} />
        </div>
    )
}

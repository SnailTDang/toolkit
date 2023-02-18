import React, { useEffect, useState } from 'react'
import { Tabs } from 'antd';
import ChecoutTickets from './CheckoutTickets/CheckoutTickets';
import BookTickets from './BookTickets/BookTickets';
import { useSelector } from 'react-redux';
import {useNavigate } from "react-router-dom";
// import Footer from "../../components/Footer/Footer";
// import Header from "../HomeTemplates/Layout/Header/Header";
import { USER_LOGIN } from "../../constants/baseSettings/settings";
// import { LEAVE_TAB } from '../../redux/types/TicketType';
// import LoadingMini from '../../components/Loadingmini/LoadingMini';
import './checkout.css'
import { useParams } from 'react-router';
import { checkLogin } from '../../App';
import { changeTab } from '../../features/ticketsRoom/ticketRoomSlice';
// import { TOKEN_CYBER } from '../../ulti/constants/Settings';
// import { getTicketsUserLogin } from '../../features/user/userAction';
import { useDispatch } from 'react-redux';
import { getTicketsUserLogin } from '../../features/user/userAction';
import { startLoading, stopLoading } from '../../features/loading/loadingSlice';


const { TabPane } = Tabs;

export default function Checkout(props) {
    const isLogin = checkLogin()
    // let navigate = useNavigate()
    const {id} = useParams()
    const dispatch = useDispatch()
    const { userInfo } = useSelector(state => state.userReducer)
    const { tabDefault } = useSelector(state => state.ticketsRoomReducer)
    // const [tabDefault, setTabDefault] = useState('1')
    useEffect(() => {     
        // if (!isLogin) {
        //     console.log('da dang nhap')
        //     navigate('/login')
        // } else {
        //     // console.log(userInfo)
        // }
        let account = JSON.parse(isLogin)
        // console.log(account)
        dispatch(startLoading())
        // dispatch
        dispatch(getTicketsUserLogin(account.taiKhoan))
        .then(()=> {
            dispatch(stopLoading())
        })
        dispatch(changeTab('1'))
        // dispatch({ type: LEAVE_TAB, value: "1" })
    }, [])
    return (
        <>
            {/* <LoadingMini /> */}
            <Tabs activeKey={tabDefault} defaultActiveKey="1" onChange={(key) => {
                dispatch(changeTab(key))
                // dispatch({ type: LEAVE_TAB, value: key })
            }}>
                <TabPane tab={<h3 className='text-xl text-white p-3'>BOOK TICKETS</h3>} key="1">
                    <ChecoutTickets {...props} id={id} />
                </TabPane>
                <TabPane tab={<h3 className='text-xl text-white p-3'>HISTORY BOOKING</h3>} key="2">
                    <BookTickets userInfo={userInfo} />
                </TabPane>
            </Tabs>
        </>
    )
}

import React, { useEffect } from 'react'
import { Tabs } from 'antd';
import ChecoutTickets from './CheckoutTickets/CheckoutTickets';
import BookTickets from './BookTickets/BookedTickets';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { checkLogin } from '../../App';
import { changeTab } from '../../features/ticketsRoom/ticketRoomSlice';
import { useDispatch } from 'react-redux';
import { getTicketsUserLogin } from '../../features/user/userAction';
import { startLoading, stopLoading } from '../../features/loading/loadingSlice';
import './checkout.css'
import { getTicketRoom } from '../../features/ticketsRoom/ticketRoomAction';


const { TabPane } = Tabs;

export default function Checkout(props) {
    const isLogin = checkLogin()
    const {id} = useParams()
    const dispatch = useDispatch()
    const { userInfo } = useSelector(state => state.userReducer)
    const { tabDefault } = useSelector(state => state.ticketsRoomReducer)
    const { userLogin } = useSelector(state => state.userReducer)
    const { ticketRoom } = useSelector(state => state.ticketsRoomReducer)

    const fetchTicketsOfUser = ()=> {
        let account = JSON.parse(isLogin)
        dispatch(startLoading())
        dispatch(getTicketsUserLogin({ taiKhoan: account.taiKhoan }))
        .then(()=> {
            dispatch(stopLoading())
        })
    }

    const changeTabCheckout = (key) => {
        if(key === '2') {
            fetchTicketsOfUser()
        }
        dispatch(changeTab(key))
    }

    const getShowRoom = () => {
        dispatch(startLoading())
        dispatch(getTicketRoom(id))
        .then(()=> {
            dispatch(stopLoading())
        })
    }
    useEffect(() => {     
        // fetchTicketsOfUser()
        getShowRoom()
        dispatch(changeTab('1'))
    }, [])
    return (
        <>
            <Tabs activeKey={tabDefault} defaultActiveKey="1" onChange={(key) => {
                changeTabCheckout(key)
            }}>
                <TabPane tab={<h3 className='text-xl text-white p-3'>BOOK TICKETS</h3>} key="1">
                    <ChecoutTickets 
                    userLogin={userLogin} 
                    ticketRoom={ticketRoom}
                    id={id}
                    />
                </TabPane>
                <TabPane tab={<h3 className='text-xl text-white p-3'>HISTORY BOOKING</h3>} key="2">
                    <BookTickets userInfo={userInfo} />
                </TabPane>
            </Tabs>
        </>
    )
}

import React, { useEffect } from 'react'
import { Tabs } from 'antd';
import ChecoutTickets from './CheckoutTickets/CheckoutTickets';
import BookTickets from './BookTickets/BookTickets';
import { useDispatch, useSelector } from 'react-redux';
// import { LEAVE_TAB } from '../../redux/types/TicketType';
import LoadingMini from '../../components/Loadingmini/LoadingMini';
import './checkout.css'
import { useParams } from 'react-router';
// import { TOKEN_CYBER } from '../../ulti/constants/Settings';
// import { getTicketsUserLogin } from '../../features/user/userAction';



const { TabPane } = Tabs;

export default function Checkout(props) {
    const {id} = useParams()
    // const dispatch = useDispatch()
    const { userInfo } = useSelector(state => state.userReducer)
    const { tabDefault } = useSelector(state => state.ticketsRoomReducer)
    useEffect(() => {
        // dispatch({ type: LEAVE_TAB, value: "1" })
    }, [])
    return (
        <>
            {/* <LoadingMini /> */}
            <Tabs activeKey={tabDefault} defaultActiveKey="1" onChange={(key) => {
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

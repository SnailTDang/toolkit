import { Route, redirect, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../HomeTemplates/Layout/Header/Header";
import { USER_LOGIN } from "../../constants/baseSettings/settings";
import Checkout from "../../views/Checkout/Checkout";
import { useEffect } from "react";



const CheckoutTemplate = (props) => {
    // let navigate = useNavigate()
    // if (!localStorage.getItem(USER_LOGIN)) {
    //     console.log(localStorage.getItem(USER_LOGIN))
    //     navigate('/login')
    // }
    // const { Component, ...restProps } = props;
    return <>
        {/* <Prompt
                message={(location, action) => {
                    if (action === 'POP') {
                        // console.log("Backing up...")
                    }

                    return location.pathname.startsWith("/app")
                        ? true
                        : `Are you sure you want to leave without checkout?`
                }}
            /> */}
        <Header />
        <Checkout />
        <Footer />
    </>
}

export default CheckoutTemplate
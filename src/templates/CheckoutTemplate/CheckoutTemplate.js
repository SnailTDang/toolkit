import { Route, redirect } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../HomeTemplates/Layout/Header/Header";
import { USER_LOGIN } from "../../constants/baseSettings/settings";
import Checkout from "../../views/Checkout/Checkout";




const CheckoutTemplate = (props) => {
    if (!localStorage.getItem(USER_LOGIN)) {
        redirect('/login')
    }
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
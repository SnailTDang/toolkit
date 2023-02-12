import { Route, redirect } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { USER_LOGIN } from "../../constants/baseSettings/settings";
import Register from "../../views/Register/Register";
import Header from "../HomeTemplates/Layout/Header/Header";




const SignUpTemplate = (props) => {
    if (localStorage.getItem(USER_LOGIN)) {
        redirect('/')
    }
    // const { Component, ...restProps } = props;
    return <>
        <Header />
        <Register />
        <Footer />
    </>
}

export default SignUpTemplate
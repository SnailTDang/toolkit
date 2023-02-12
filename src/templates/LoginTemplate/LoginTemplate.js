import { Route, redirect } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { USER_LOGIN } from "../../constants/baseSettings/settings";
import Login from "../../views/Login/Login";
import Header from "../HomeTemplates/Layout/Header/Header";




const LoginTemplate = (props) => {
    if (localStorage.getItem(USER_LOGIN)) {
        redirect('/cinema-reactjs/')
    }
    return <>
        <Header />
        <Login />
        <Footer />
    </>
}
// const { Component, ...restProps } = props

export default LoginTemplate
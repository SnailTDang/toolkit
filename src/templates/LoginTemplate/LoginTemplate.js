import { useEffect } from "react";
import { Route, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { USER_LOGIN } from "../../constants/baseSettings/settings";
import Login from "../../views/Login/Login";
import Header from "../HomeTemplates/Layout/Header/Header";




const LoginTemplate = (props) => {
    const isLogin = localStorage.getItem(USER_LOGIN)
    const navigate = useNavigate()
    useEffect(() => {
        console.log(isLogin)
        if (isLogin) {
            navigate(-1)
        }
    }, [])
    return <>
        <Header />
        <Login />
        <Footer />
    </>
}
// const { Component, ...restProps } = props

export default LoginTemplate
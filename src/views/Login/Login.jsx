import React from 'react'
import LoginForm from '../../components/Login/LoginForm'
import { checkLogin } from '../../App'
import { Navigate } from "react-router-dom";

export default function Login() {
    const isLogin = checkLogin()

    return (
        <>
            {isLogin ? <Navigate to={-1} replace={true} /> : <div div className="container" >
                <LoginForm />
            </div >}
        </>

    )
}

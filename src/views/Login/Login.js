import React, { useEffect } from 'react'
import LoginForm from '../../components/Login/LoginForm'
import { checkLogin } from '../../App'
import { useNavigate } from 'react-router-dom'
import { Navigate } from "react-router-dom";

export default function Login() {
    const isLogin = checkLogin()

    return (
        <>
            {isLogin ? <Navigate to='/' replace={false} /> : <div div className="container" >
                <LoginForm />
            </div >}
        </>

    )
}

import React from 'react'
import RegisterForm from '../../components/Register/RegisterForm'
import { checkLogin } from '../../App'
import { Navigate } from 'react-router-dom'

export default function Register() {
    const isLogin = checkLogin()
    return (
        <>
            {isLogin ? <Navigate to='/' replace={false} /> : <div div className="container" >
                <RegisterForm />
            </div >}
        </>
    )
}

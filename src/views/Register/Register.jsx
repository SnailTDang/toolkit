import React, { useEffect } from 'react'
import RegisterForm from '../../components/Register/RegisterForm'
import { useNavigate } from 'react-router-dom'
import { checkLogin } from '../../App'

export default function Register() {
    const navigate = useNavigate()
    const isLogin = checkLogin()
    useEffect(() => {
        if (isLogin) {
            navigate('/')
        }
        // dispatch({ type: LEAVE_TAB, value: "1" })
    }, [])
    return (
        <div className="container">
            <RegisterForm />
        </div>
    )
}

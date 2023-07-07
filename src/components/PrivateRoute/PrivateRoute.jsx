import React from 'react'
import { Navigate } from 'react-router-dom'
import { checkLogin } from '../../App'

export default function PrivateRoute({children}) {
    const isLogin = checkLogin()
    return (
    isLogin ? children : <Navigate to='/login' replace={true}/>
    )
}

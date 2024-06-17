import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { userLoginAction } from '../../features/user/userAction';
import { useDispatch } from 'react-redux';
// import { history } from '../../App';
import { Col, Row } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import "./loginform.css"






export default function LoginForm(props) {
    const [focus, setFocus] = useState({
        account: false,
        pass: false,
    })
    const navigate = useNavigate();
    const [message, setMessage] = useState('')

    const dispatch = useDispatch()

    const submitLogin =  (user) => {
        dispatch(userLoginAction(user))
            .then((res)=> {
                let response = res.payload
                if(response.status !== 200){
                    setMessage(response.data)
                } else {
                    navigate(-1, { replace: true })
                }
            })
    }

    const formik = useFormik({
        initialValues: {
            account: '',
            pass: '',

        },
        validationSchema: Yup.object({
            pass: Yup.string()
                .min(6, 'Enter at least 6 characters*')
                .required('Enter Passwork*'),
            account: Yup.string()
                .min(6, 'Enter at least 6 characters*')
                .required('Enter Account*'),
        }),
        onSubmit: values => {
            let user = {
                taiKhoan: values.account,
                matKhau: values.pass
            }
            submitLogin(user)
        },
    });

    useEffect(() => {
    }, [])

    const hanldeInput = (e) => {
        if (e.target.value.trim() !== '') {
            focus[e.target.name] = true;
        } else {
            focus[e.target.name] = false;
        }
        setFocus(
            { ...focus }
        )
        setMessage('')
    }

    return (
        <div className="limiter">
            <div className="container-login100">
                <Row className="wrap-login100">
                    <Col lg={10} xs={24} className='flex items-center'>
                        <form className="login100-form w-full" onSubmit={formik.handleSubmit}>
                            <h1 className="login100-form-title p-4 font-bold text-orange-main">
                                LOGIN TO CONTINIUE
                            </h1>
                            <div className="pb-1">
                                <div className="wrap-input100 validate-input" data-validate="Valid account is required: ex@abc.xyz">
                                    <input className={`input100 ${focus.account === true ? 'has-val' : ''}`} type="text" name="account"
                                        onChange={(e) => {
                                            formik.handleChange(e)
                                            hanldeInput(e)
                                        }}
                                        value={formik.values.account}
                                        onBlur={(e) => {
                                            formik.handleBlur(e)
                                        }} />

                                    <span className="focus-input100" />
                                    <span className="label-input100">Account</span>
                                </div>
                                <div className="h-30">
                                {formik.touched.account && formik.errors.account ? (
                                    <div className='py-1 text-red-600'>{formik.errors.account}</div>
                                ) : null}
                                </div>
                            </div>
                            <div className="pt-1">
                                <div className="wrap-input100 validate-input" data-validate="Password is required">
                                    <input className={`input100 ${focus.pass === true ? 'has-val' : ''}`} type="password" name="pass"
                                        onChange={(e) => {
                                            formik.handleChange(e)
                                            hanldeInput(e)
                                        }}
                                        value={formik.values.pass}
                                        onBlur={(e) => {
                                            formik.handleBlur(e)
                                        }} />
                                    <span className="focus-input100" />
                                    <span className="label-input100">Password</span>
                                </div>
                                <div className="h-30">
                                {formik.touched.pass && formik.errors.pass ? (
                                    <div className='py-1 text-red-600'>{formik.errors.pass}</div>
                                ) : null}
                                    <span className='text-red-600'>{message}</span>
                                </div>
                            </div>
                            <div className="flex justify-between w-full pb-2">
                                <div>
                                    <Link to="/" className="txt1">
                                        Forgot Password?
                                    </Link>
                                </div>
                                <div>
                                    <Link to="/register" className="txt1">
                                        Don't have an account yet?
                                    </Link>
                                </div>
                            </div>
                            <div className="container-login100-form-btn">
                                <button className="login100-form-btn font-bold text-2xl text-orange-main border-2 border-orange-main hover:bg-orange-main hover:text-white" type='submit'>
                                    Login
                                </button>
                            </div>
                            <div className="text-center pt-4 pb-4">
                                <span className="txt2">
                                    or sign up using
                                </span>
                            </div>
                            <div className="login100-form-social flex gap-2 justify-center">
                                <Link to='/' className="login100-form-social-item flex bg1 m-r-5 items-center justify-center">
                                    <i className="fab fa-facebook-f" aria-hidden="true"></i>
                                </Link>
                                <Link to='/' className="login100-form-social-item flex bg2 m-r-5 items-center justify-center">
                                    <i className="fab fa-twitter" aria-hidden="true" />
                                </Link>
                            </div>
                        </form>
                    </Col>
                    <Col lg={14}>
                        <img src="https://metiz.vn/media/new_offer/KM_SUPER__MONDAY_MEDIA-02.jpg" alt="" className=' h-full' />
                    </Col>
                </Row>
            </div>
        </div>

    )
}

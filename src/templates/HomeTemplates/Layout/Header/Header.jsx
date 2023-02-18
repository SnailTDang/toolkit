import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
// import { history } from '../../../../App'
// import { USER_LOGIN, TOKEN_CYBER } from '../../../../ulti/constants/Settings'
import { USER_LOGIN, TOKEN_CYBER } from '../../../../constants/baseSettings/settings'
import StatusUser from './StatusUser/StatusUser'
// import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useSelector } from 'react-redux';
import { checkLogin } from '../../../../App';
// import { Drawer, Button } from "antd";
// import { Menu } from "antd";

// import "antd/dist/antd.css";

// const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;

const isActiveMenu = (isActive) => {
    // console.log(isActive)
    if (!isActive) {
        return "nav-link flex items-center p-5 text-white text-lg unselected font-semibold hover:text-orange-main"
    } else {
        return "nav-link flex items-center p-5 text-lg font-semibold text-orange-main border-orange-main hover:text-orange-main"
    }
}



export default function Header(props) {
    const {userLogin} = useSelector(state => state.userReducer)
    const isLogin = checkLogin()
    let userHeader = isLogin? JSON.parse(localStorage.getItem(USER_LOGIN)) || userLogin : null
    useEffect (()=> {

    })
    // console.log(userLogin)
    return (
        <>
            <header className="pb-5 bg-blue-main bg-opacity-500/75 text-coolGray-100 w-100 z-10000 text-white sticky top-0">
                <div className="header-info hidden-xs">
                    <div className="header-container container">
                        <div className="header-right">
                            <div className="header-phone text-right">
                                Hotline: <a href="tel:02363630689">0236 3630 689</a>
                            </div>
                            <div className="header-top-time text-right">
                                <div className="time-header">
                                    Working-time: 8:00 - 22:00
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-strong-blue bg-opacity-500/75">
                    <div className="container flex justify-between mx-auto relative">
                        <a href='/' className="block w-fit items-center absolute -top-14 left-4 -bottom-4 bg-strong-blue bg-opacity-500/75">
                            <img src={'https://snailtdang.github.io/cyberphone/img/Brandlogo.png'} alt="" className='w-32' />
                        </a>
                        <ul className="items-stretch space-x-3 flex mb-0 ml-20 lg:ml-64">
                            <li className="flex">
                                <NavLink to="/home"
                                    className={isActive => isActiveMenu(isActive.isActive)}
                                >HOME</NavLink>
                            </li>
                            <li className="flex">
                                <NavLink to="/showtimes" className={isActive => isActiveMenu(isActive.isActive)}>SHOWTIMES</NavLink>
                            </li>
                            <li className="flex">
                                <NavLink to="/news"
                                    className={isActive => isActiveMenu(isActive.isActive)}
                                >PROMOTIONS</NavLink>
                            </li>
                            <li className="flex">
                                <NavLink to="/contact"
                                    className={isActive => isActiveMenu(isActive.isActive)}
                                >CONTACT</NavLink>
                            </li>
                        </ul>
                        <StatusUser user={userHeader} />
                        <button className="p-4 lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-coolGray-100">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </header >
        </>
    )
}

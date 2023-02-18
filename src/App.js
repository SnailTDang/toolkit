import React, { lazy, Suspense } from 'react';
import { Route, Routes, Navigate, useRoutes, useNavigate } from 'react-router-dom'
// import { createBrowserHistory } from 'history'

// import { HomeTemplate } from './templates/HomeTemplates/HomeTemplate';
// import { ContactTemplate } from './templates/ContactTemplate/ContactTemplate';
// import { DetailTemplate } from './templates/DetailTemplate/DetailTemplate';
// import LoginTemplate from './templates/LoginTemplate/LoginTemplate';
// import SignUpTemplate from './templates/SignUpTemplate/SignUpTemplate';
// import AboutTemplate from './templates/AboutTemplate/AboutTemplate';
// import ShowtimesTemplate from './templates/ShowtimesTemplate/ShowtimesTemplate';
// import NewsTemplate from './templates/NewsTemplate/NewsTemplate';
// import CheckoutTemplate from './templates/CheckoutTemplate/CheckoutTemplate'
// import HistoryBookingTemplate from './templates/HistoryBookingTemplate/HistoryBookingTemplate';
// import ContactTemplate from './templates/HistoryBookingTemplate/HistoryBookingTemplate';

import { USER_LOGIN } from './constants/baseSettings/settings';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Home from './views/Home/Home';
import Contact from './views/Contact/Contact';
import News from './views/News/News';
import DeitailMovies from './views/Detail/DeitailMovies';
import Login from './views/Login/Login';
import Register from './views/Register/Register'
import Checkout from './views/Checkout/Checkout';
import Showtimes from './views/Showtimes/Showtimes';
import About from './views/About/About';
import HistoryBooking from './views/HistoryBooking/HistoryBooking';
import MainLayout from './templates/layouts/MainLayout';
import './App.css';
import LoadingMini from './components/Loadingmini/LoadingMini';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

// const Home = lazy(() => import('./views/Home/Home'));
// const Contact = lazy(() => import('./views/Contact/Contact'));
// const News = lazy(() => import('./views/News/News'));
// const DeitailMovies = lazy(() => import('./views/Detail/DeitailMovies'));
// const Login = lazy(() => import('./views/Login/Login'))
// const Register = lazy(() => import('./views/Register/Register'))
// const About = lazy(() => import('./views/About/About'))
// const Showtimes = lazy(() => import('./views/Showtimes/Showtimes'))
// const Checkout = lazy(() => import('./views/Checkout/Checkout'))
// const HistoryBooking = lazy(() => import('./views/HistoryBooking/HistoryBooking'))


export const checkLogin = function () {
  // console.log(localStorage.getItem(USER_LOGIN))
  return localStorage.getItem(USER_LOGIN)
}

// export const history = createBrowserHistory()

function App() {
  // const isLogin = checkLogin()
  // const navigate = useNavigate()
  const elements = [
    {
      exact: true,
      isPrivate: false,
      path: '/home',
      element: Home
    },
    {
      exact: true,
      isPrivate: false,
      path: '/',
      element: Home
    },
    {
      exact: true,
      isPrivate: false,
      path: '/contact',
      element: Contact
    },
    {
      exact: true,
      isPrivate: false,
      path: '/about',
      element: About
    },
    {
      exact: true,
      isPrivate: true,
      path: '/history-booking',
      element: HistoryBooking
    },
    {
      exact: true,
      isPrivate: true,
      path: '/checkout/:id',
      element: Checkout
    },
    {
      exact: true,
      isPrivate: false,
      path: '/showtimes',
      element: Showtimes
    },
    {
      exact: true,
      isPrivate: false,
      path: '/movie',
      element: DeitailMovies
    },
    {
      exact: true,
      isPrivate: false,
      path: '/login',
      element: Login
    },
    {
      exact: true,
      isPrivate: false,
      path: '/register',
      element: Register
    },
    {
      exact: true,
      isPrivate: false,
      path: '/news',
      element: News
    },
    {
      exact: true,
      isPrivate: false,
      path: '/movie/:id',
      element: DeitailMovies
    }
  ]
  return (
    <div className="wrapper m-auto overflow-hidden">
      {/* <HomeTemplate /> */}
      <ScrollToTop />
      <LoadingMini />
      <MainLayout>
        <Routes>
          {elements.map((route, index) => {
            let Component = route.element
            if (route.isPrivate) {
              return <Route

                key={index.toString()}
                path={route.path}
                element={
                  <PrivateRoute >
                    <Component />
                  </PrivateRoute>}
              />
            } else {
              return <Route key={index.toString()} path={route.path} element={<Component />} />
            }
          })}
          {/* <Route path='/checkout/:id' element={<PrivateRoute><Checkout key="111111" /></PrivateRoute>} /> */}
        </Routes>
        {/* <Route
          path="/checkout"
          element={!isLogin ? <Navigate to="/login" replace /> : <Checkout />}
        /> */}
      </MainLayout>
    </div>
  );
}

export default App;

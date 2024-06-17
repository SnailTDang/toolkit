import React from "react";
import { Route, Routes } from "react-router-dom";
import { USER_LOGIN } from "./constants/baseSettings/settings";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Home from "./views/Home/Home";
import Contact from "./views/Contact/Contact";
import News from "./views/News/News";
import DeitailMovies from "./views/Detail/DeitailMovies";
import Login from "./views/Login/Login";
import Register from "./views/Register/Register";
import Checkout from "./views/Checkout/Checkout";
import Showtimes from "./views/Showtimes/Showtimes";
import About from "./views/About/About";
import HistoryBooking from "./views/HistoryBooking/HistoryBooking";
import MainLayout from "./templates/layouts/MainLayout";
import "./App.css";
import LoadingMini from "./components/Loadingmini/LoadingMini";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import NotFound from "./views/NotFound/NotFound";

export const checkLogin = function () {
    return localStorage.getItem(USER_LOGIN);
};

function App() {
    const elements = [
        {
            exact: true,
            isPrivate: false,
            path: "/",
            element: Home,
        },
        {
            exact: true,
            isPrivate: false,
            path: "/contact",
            element: Contact,
        },
        {
            exact: true,
            isPrivate: false,
            path: "/about",
            element: About,
        },
        {
            exact: true,
            isPrivate: true,
            path: "/history-booking",
            element: HistoryBooking,
        },
        {
            exact: true,
            isPrivate: true,
            path: "/checkout/:id",
            element: Checkout,
        },
        {
            exact: true,
            isPrivate: false,
            path: "/showtimes",
            element: Showtimes,
        },
        {
            exact: true,
            isPrivate: false,
            path: "/movie",
            element: DeitailMovies,
        },
        {
            exact: true,
            isPrivate: false,
            path: "/login",
            element: Login,
        },
        {
            exact: true,
            isPrivate: false,
            path: "/register",
            element: Register,
        },
        {
            exact: true,
            isPrivate: false,
            path: "/news",
            element: News,
        },
        {
            exact: true,
            isPrivate: false,
            path: "/movie/:id",
            element: DeitailMovies,
        },
    ];
    return (
        <div className="wrapper m-auto overflow-hidden">
            <ScrollToTop />
            <LoadingMini />
            <MainLayout>
                <Routes>
                    {elements.map((route, index) => {
                        let Component = route.element;
                        if (route.isPrivate) {
                            return (
                                <Route
                                    key={index.toString()}
                                    path={route.path}
                                    element={
                                        <PrivateRoute>
                                            <Component />
                                        </PrivateRoute>
                                    }
                                />
                            );
                        } else {
                            return (
                                <Route
                                    key={index.toString()}
                                    path={route.path}
                                    element={<Component />}
                                />
                            );
                        }
                    })}
                    <Route path="*" element={<NotFound />} />
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

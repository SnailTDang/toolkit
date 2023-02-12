// import { Route } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Home from "../../views/Home/Home";
import Header from "./Layout/Header/Header";
import HomeCarousel from "./Layout/HomeCarousel/HomeCarousel";


export const HomeTemplate = (props) => {
    // const { Component, ...restProps } = props;
    // return <Route {...restProps} element={(propsRoute) => {
    return <>
        <Header />
        <HomeCarousel />
        <Home />
        <Footer />
    </>
    // }
}
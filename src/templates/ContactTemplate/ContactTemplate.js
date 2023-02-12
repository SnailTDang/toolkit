import { Route } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Contact from "../../views/Contact/Contact";
import Header from "../HomeTemplates/Layout/Header/Header";

// import HomeCarousel from "./Layout/HomeCarousel/HomeCarousel";

export const ContactTemplate = (props) => {
    // const { Component, ...restProps } = props;
    return <>
        <Header />
        <Contact />
        <Footer />
    </>
}

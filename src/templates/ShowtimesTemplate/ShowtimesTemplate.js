import { Route } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Showtimes from "../../views/Showtimes/Showtimes";
// import News from "../../pages/News/News";
import Header from "../HomeTemplates/Layout/Header/Header";


const ShowtimesTemplate = (props) => {
    // const { Component, ...restProps } = props;
    return <>
        <Header />
        <Showtimes />
        <Footer />
    </>
}

export default ShowtimesTemplate
import { Route } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import News from "../../views/News/News";
// import News from "../../pages/News/News";
import Header from "../HomeTemplates/Layout/Header/Header";


const NewsTemplate = (props) => {
    // const { Component, ...restProps } = props;
    return <>
        <Header />
        <News />
        <Footer />
    </>
}

export default NewsTemplate
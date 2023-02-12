import { Route } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import About from "../../views/About/About";
import Header from "../HomeTemplates/Layout/Header/Header";

const AboutTemplate = (props) => {
    return <>
        <Header />
        <About />
        <Footer />
    </>
}

export default AboutTemplate
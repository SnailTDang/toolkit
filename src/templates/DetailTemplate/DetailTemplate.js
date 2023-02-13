import { useParams } from 'react-router-dom';
import Footer from "../../components/Footer/Footer";
// import PopupTrailer from "../../components/PopupTrailer/PopupTrailer";
import DeitailMovies from "../../views/Detail/DeitailMovies";
// import Contact from "../../views/Contact/Contact";
// import DeitailMovies from "../../pages/Detail/DeitailMovies";
import Header from "../HomeTemplates/Layout/Header/Header";

// import HomeCarousel from "./Layout/HomeCarousel/HomeCarousel";

export const DetailTemplate = (props) => {
    const { id } = useParams();
    console.log('render')
    return <>
        <Header />
        <DeitailMovies idMovie={id} />
        <Footer />
    </>
}
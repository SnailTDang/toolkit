import { Route } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import LoadingMini from "../../components/Loadingmini/LoadingMini";
import HistoryBooking from "../../views/HistoryBooking/HistoryBooking"
import Header from "../HomeTemplates/Layout/Header/Header";

const HistoryBookingTemplate = (props) => {
    return <>
        <LoadingMini />
        <Header />
        <HistoryBooking />
        <Footer />
    </>
}

export default HistoryBookingTemplate
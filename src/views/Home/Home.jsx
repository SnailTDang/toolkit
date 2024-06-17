import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PopupTrailer from "../../components/PopupTrailer/PopupTrailer";
import { getCinamSystem } from "../../features/cinemaSystem/cinemaSystemAction";
import { getListMovies } from "../../features/movies/moviesAction";
import HomeCarousel from "../../templates/HomeTemplates/Layout/HomeCarousel/HomeCarousel";
import CinemasList from "./CinemaList/CinemaList";
import HomeMenu from "./HomeMenu/HomeMenu";

const Home = () => {
    const { listMovies } = useSelector((state) => state.moviesReducer);
    const { cinemaSystem } = useSelector((state) => state.cinemaSystemReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getListMovies("GP03"));
        dispatch(getCinamSystem("GP03"));
    }, [dispatch]);

    // console.log(moviesList)
    return (
        <>
            <HomeCarousel />
            <PopupTrailer />
            <HomeMenu moviesList={listMovies} />
            <div
                className=""
                style={{
                    background: `url('https://www.bhdstar.vn/wp-content/themes/bhd/assets/images/movie-details-bg.jpg')`,
                    color: "#fff",
                    backgroundPosition: "top",
                    backgroundSize: "cover",
                    backgroundAttachment: "fixed",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="backdrop">
                    <CinemasList cinemaCyber={cinemaSystem} />
                </div>
            </div>
        </>
    );
};

export default memo(Home);

import React, { memo, useCallback, useEffect } from "react";
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
        dispatch(getListMovies("GP05"));
        dispatch(getCinamSystem("GP05"));
    }, []);

    const getMoviesByType = useCallback((conitions = "showing") => {
        switch (conitions) {
            case "showing":
                dispatch(getListMovies("GP05"));
                break;
            case "coming":
                dispatch(getListMovies("GP04"));
                break;
            default:
                break;
        }
    }, []);

    return (
        <>
            <HomeCarousel />
            <PopupTrailer />
            <HomeMenu
                moviesList={listMovies}
                getMoviesByType={getMoviesByType}
            />
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

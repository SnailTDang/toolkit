import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListMovies } from "../../features/movies/moviesAction";
import { getCinamSystem } from "../../features/cinemaSystem/cinemaSystemAction";
import CinemaList from "../Home/CinemaList/CinemaList";

export default function Showtimes() {
    const { cinemaSystem } = useSelector((state) => state.cinemaSystemReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getListMovies("GP03"));
        dispatch(getCinamSystem("GP03"));
    }, []);

    return (
        <>
            <CinemaList cinemaCyber={cinemaSystem} />
        </>
    );
}

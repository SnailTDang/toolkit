import React, { useMemo } from "react";
import MovieSwiper from "../../../components/MoviesSwiper/MovieSwiper";

const HomeMenu = (props) => {
    const { showing, coming } = props.moviesList;

    const buttonActive = useMemo(() => {
        return {
            showing: showing === true ? "active-button-film" : "",
            coming: coming === true ? "active-button-film" : "",
        };
    }, [showing, coming]);

    return (
        <div className="bg-[url('https://metiz.vn/static/assets/websites/images/bg-session-movie.png')] py-10">
            <div className="container mx-auto">
                <div className="flex justify-center py-5">
                    <button
                        type="button"
                        className={`${buttonActive.showing} text-xl text-white border-white border-2 px-8 py-3 font-semibold rounded-full hover:bg-orange-main mr-4`}
                        // onClick={() => {
                        //     const action = {
                        //         type: GET_MOVIES_SHOWING,
                        //     }
                        //     dispatch(action)
                        // }}
                    >
                        SHOWING MOVIES
                    </button>
                    <button
                        type="button"
                        className={`${buttonActive.activeButtonComing} text-xl text-white border-white border-2 px-8 py-3 font-semibold rounded-full hover:bg-orange-main`}
                        // onClick={() => {
                        //     const action = {
                        //         type: GET_MOVIES_COMING,
                        //     }
                        //     dispatch(action)
                        // }}
                    >
                        COMING MOVIES
                    </button>
                </div>
                <MovieSwiper moviesList={props.moviesList.arrayMovieDefault} />
            </div>
        </div>
    );
};

export default HomeMenu;

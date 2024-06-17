import React, { memo, useMemo, useState } from "react";
import MovieSwiper from "../../../components/MoviesSwiper/MovieSwiper";

const HomeMenu = (props) => {
    const [show, setShow] = useState(true);
    const { getMoviesByType } = props;

    const buttonActive = useMemo(() => {
        return {
            showing: show === true ? "active-button-film" : "",
            coming: show === false ? "active-button-film" : "",
        };
    }, [show]);

    return (
        <div className="bg-[url('https://metiz.vn/static/assets/websites/images/bg-session-movie.png')] py-10">
            <div className="container mx-auto">
                <div className="flex justify-center py-5">
                    <button
                        type="button"
                        className={`${buttonActive.showing} text-xl text-white border-white border-2 px-8 py-3 font-semibold rounded-full hover:bg-orange-main mr-4`}
                        onClick={() => {
                            getMoviesByType();
                            setShow(true);
                        }}
                    >
                        SHOWING MOVIES
                    </button>
                    <button
                        type="button"
                        className={`${buttonActive.coming} text-xl text-white border-white border-2 px-8 py-3 font-semibold rounded-full hover:bg-orange-main`}
                        onClick={() => {
                            getMoviesByType("coming");
                            setShow(false);
                        }}
                    >
                        COMING MOVIES
                    </button>
                </div>
                <MovieSwiper moviesList={props.moviesList.arrayMovieDefault} />
            </div>
        </div>
    );
};

export default memo(HomeMenu);

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector, useDispatch } from "react-redux";
import { getBanners } from "../../../../features/banner/bannersAction";
// import BannerItem from '../../../../components/BannerItem/BannerItem';

import { Autoplay, FreeMode, Navigation, Thumbs, EffectFade } from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "../HomeCarousel/swiper.css";
import { NavLink } from "react-router-dom";

export default function HomeCarousel(props) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const { bannersList } = useSelector((state) => state.bannersReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBanners("GP05"));
    }, []);

    const renderBanner = () => {
        return bannersList?.map((item) => {
            return (
                <SwiperSlide key={item.maPhim}>
                    <NavLink
                        exact
                        to={`/movie/${item.maPhim}`}
                        className="w-full max-h-450 object-cover"
                    >
                        <img
                            src={item.hinhAnh}
                            alt=""
                            className="w-full max-h-450 object-cover"
                        />
                    </NavLink>
                </SwiperSlide>
            );
        });
    };
    const renderThumbBanner = () => {
        return bannersList?.map((item) => {
            return (
                <SwiperSlide key={item.maPhim}>
                    <img
                        src={item.hinhAnh}
                        alt=""
                        className="w-full max-h-450 object-cover"
                    />
                </SwiperSlide>
            );
        });
    };
    return (
        <div className="py-5">
            <div className="container mx-auto">
                <Swiper
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[
                        FreeMode,
                        Navigation,
                        Thumbs,
                        Autoplay,
                        EffectFade,
                    ]}
                    spaceBetween={10}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    effect={"fade"}
                    navigation={true}
                    pagination={{ dynamicBullets: true }}
                    className="mySwiper2"
                >
                    {renderBanner()}
                </Swiper>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={5}
                    watchSlidesProgress={true}
                    modules={[Navigation, Thumbs]}
                    className="mySwiper"
                >
                    {renderThumbBanner()}
                </Swiper>
            </div>
        </div>
    );
}

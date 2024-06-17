import React, { memo } from "react";
import { Tabs, Space } from "antd";
import { Link, NavLink } from "react-router-dom";
import moment from "moment";
import "./home.css";

const { TabPane } = Tabs;

const renderCinemeList = (list) => {
    return list?.map((cinemas, index) => {
        return (
            <TabPane
                tab={
                    <img className="w-20 m-auto" src={cinemas.logo} alt="img" />
                }
                key={index}
            >
                <Tabs tabPosition={"left"}>
                    {cinemas.lstCumRap?.map((cine, index) => {
                        return (
                            <TabPane
                                className="w-full"
                                tab={
                                    <div className="flex items-center justify-center">
                                        <img
                                            className="w-20"
                                            src={cinemas.logo}
                                            alt="img"
                                        />
                                        <div className="text-left ml-4 lg:w-80 w-full text-white ">
                                            <p className="text-lg mb-0 break-words whitespace-pre-wrap hover:text-orange-300">
                                                {cine.tenCumRap}
                                            </p>
                                            <p className="break-words whitespace-pre-wrap">
                                                {cine.diaChi}
                                            </p>
                                            <Link
                                                to={`https://www.google.com/maps/search/${cine.diaChi}?transaction_id=`}
                                                target="_blank"
                                                className="py-1 px-2 bg-orange-main text-white hover:text-white inline-block mt-2"
                                            >
                                                <span className="pr-1">
                                                    Xem bản đồ
                                                </span>
                                                <i className="fa fa-map-marker-alt"></i>
                                            </Link>
                                        </div>
                                    </div>
                                }
                                key={index}
                            >
                                <div className="h-80vh overflow-auto">
                                    {cine.danhSachPhim.map((movies, index) => {
                                        return (
                                            <div
                                                className="flex border-b-2 p-4"
                                                key={index}
                                            >
                                                <div className="grow flex">
                                                    <div className="">
                                                        <img
                                                            src={movies.hinhAnh}
                                                            alt=""
                                                            className="w-20"
                                                        />
                                                    </div>
                                                    <div className="ml-4 grow">
                                                        <NavLink
                                                            exact
                                                            to={`/movie/${movies.maPhim}`}
                                                        >
                                                            <h1 className="text-xl font-bold text-orange-400 mb-3 hover:text-white">
                                                                {movies.tenPhim.toUpperCase()}
                                                            </h1>
                                                        </NavLink>
                                                        <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 xl:grid-cols-4 xl:grid-cols-6 gap-3">
                                                            {movies.lstLichChieuTheoPhim?.map(
                                                                (
                                                                    shTimes,
                                                                    index
                                                                ) => {
                                                                    return (
                                                                        <Link
                                                                            exact
                                                                            to={`/checkout/${shTimes.maLichChieu}`}
                                                                            // onClick={() => { changeDefaultTab() }}
                                                                            key={
                                                                                index
                                                                            }
                                                                            className="xl:text-lg text-lg md:text-md font-bold p-2 bg-btn-home text-white text-center"
                                                                        >
                                                                            {moment(
                                                                                shTimes.ngayChieuGioChieu
                                                                            ).format(
                                                                                "hh:mm A"
                                                                            )}
                                                                        </Link>
                                                                    );
                                                                }
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </TabPane>
                        );
                    })}
                </Tabs>
            </TabPane>
        );
    });
};

const CinemasList = (props) => {
    return (
        <div className="">
            <div className="container pt-10 pb-20" id="showtimes-cinema">
                <h1 className="text-orange-500 font-bold text-3xl text-center">
                    CINEMAS NETWORK
                </h1>
                <Space style={{ marginBottom: 24 }}></Space>
                <Tabs tabPosition={"top"}>
                    {renderCinemeList(props.cinemaCyber)}
                </Tabs>
            </div>
        </div>
    );
};

export default memo(CinemasList);

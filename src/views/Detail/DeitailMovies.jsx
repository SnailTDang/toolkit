import React, { useEffect } from 'react'
import { Row, Col, Tabs } from 'antd';
import "./detail.css"
import { useDispatch, useSelector } from 'react-redux';
import { getDetailMovie } from '../../features/movies/moviesAction';
import moment from 'moment';
import { NavLink, useParams } from 'react-router-dom';
import { showTrailer } from '../../features/trailer/trailerActions';
import PopupTrailer from '../../components/PopupTrailer/PopupTrailer';

const { TabPane } = Tabs;


export default function DeitailMovies(props) {
    const { id } = useParams()
    const { detailMovie } = useSelector(state => state.moviesReducer)
    let { danhGia, heThongRapChieu, hinhAnh, moTa, ngayKhoiChieu, tenPhim } = detailMovie
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getDetailMovie(id))
    }, [])

    return (
        <div style={{ backgroundImage: `url(${hinhAnh})`, backgroundSize: 'cover', backgroundPosition: 'top center', backgroundAttachment: "fixed" }}>
            <div className="backdrop-detail">
                <div className="container py-10">
                    <Row className='backdrop-info'>
                        <Col xs={24} sm={24} md={20} lg={20}>
                            <div className="sm:flex items-end">
                                <div className="image-movie" style={{ flex: '0 0 30%' }}>
                                    <img src={hinhAnh} alt="" className='h-400 w-full' />
                                </div>
                                <div className="info-movie text-white ml-5 py-5">
                                    <p className='text-lg'>
                                        <span className='text-orange-main font-bold'>Ngày công chiếu: </span>
                                        {moment(ngayKhoiChieu).format("DD/MM/YYYY")}
                                    </p>
                                    <h1 className='text-white font-bold text-3xl uppercase'>{tenPhim}</h1>
                                    <p className='text-base mb-2'>
                                        <span className='text-orange-main font-bold'>Đạo diễn: </span>
                                        Lorem ipsum dolor
                                    </p>
                                    <p className='text-base mb-2'>
                                        <span className='text-orange-main font-bold'>Diễn viên: </span>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, libero.
                                    </p>
                                    <p className='text-base mb-2'>
                                        <span className='text-orange-main font-bold'>Thể loại: </span>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, libero.
                                    </p>
                                    <p className='text-base mb-2'>
                                        <span className='text-orange-main font-bold'>Chi tiết: </span>
                                        {moTa}</p>
                                    <div className="trailer">
                                        <button className="inline-flex items-center py-2 px-3 text-base font-medium text-center text-white rounded-lg border-orange-600 border-2 bg-orange-500 text-white"
                                            onClick={() => {
                                                dispatch(showTrailer(detailMovie))
                                            }}
                                        >
                                            TRAILER
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={4} lg={4} >
                            <div className="flex items-end h-full justify-center">
                                <div className="rating">
                                    <h3 className='text-center text-2xl font-bold text-orange-main'>Rating</h3>
                                    <div className={`c100 p${Math.floor(danhGia * 10, 1)} orange`}>
                                        <span>{danhGia}/10</span>
                                        <div className="slice">
                                            <div className="bar"></div>
                                            <div className="fill"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className='py-10 bg-white my-10'>
                        <Tabs tabPosition={"left"} id="detail-tabs">
                            {heThongRapChieu?.map((cinemas, index) => {
                                return (
                                    <TabPane tab={
                                        <img src={cinemas.logo} className='w-20' alt='null' />
                                    } key={index}>
                                        {cinemas.cumRapChieu.map((cinema, index) => {
                                            return (
                                                <div key={index} className='px-4 border-b-2'>
                                                    <div className='flex flex-row' >
                                                        <img src={cinemas.logo} alt="" className='w-20' />
                                                        <div className='ml-5 flex flex-col justify-center'>
                                                            <h1 className='text-xl font-bold mb-2 text-orange-main'>{cinema.tenCumRap}</h1>
                                                            <p className='mb-0'>{cinema.diaChi}</p>
                                                        </div>
                                                    </div>
                                                    <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-8 xl:grid-cols-9 gap-3 py-4">
                                                        {cinema.lichChieuPhim?.map((shTimes, index) => {
                                                            return (
                                                                <NavLink exact to={`/checkout/${shTimes.maLichChieu}`} key={index} className='sm:text-lg lg:text-md 2xl:text-lg font-bold p-2 border-2 border-orange-main bg-yellow-200 text-center'>
                                                                    {moment(shTimes.ngayChieuGioChieu).format('hh:mm A')}
                                                                </NavLink>
                                                            )
                                                        })}
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </TabPane>
                                )
                            })}
                        </Tabs>
                    </Row>
                </div>
            </div>
            <PopupTrailer />
        </div >
    )
}
